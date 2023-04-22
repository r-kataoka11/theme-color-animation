import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ThemeColorState {
  color: string
}

export const initialState: ThemeColorState = {
  color: '#EBEBEB',
}

// エラー時のテーマカラーアニメーション
export const error = createAsyncThunk(
  'themeColor/errorStatus',
  async (_, thunkApi) => {
    // 初期化する
    thunkApi.dispatch(themeColorSlice.actions.resetColor())

    const velocity = 15 // 速度

    let color = 235
    let reverse = false
    const animation = () => {
      // アニメーションの終了条件を満たした場合終了する
      if (color > 235 && reverse === true) {
        thunkApi.dispatch(themeColorSlice.actions.resetColor())
        return
      }
      // 折り返し地点に来た時数値を反転する
      if (reverse === false && color < 0) {
        reverse = true
        color = 0
      }

      // 色を16進数にする
      const hex = color.toString(16).padStart(2, '0').toUpperCase()
      thunkApi.dispatch(themeColorSlice.actions.changeColor(`#EB${hex}${hex}`))

      // 色を変更する
      color = reverse ? color + velocity : color - velocity
      requestAnimationFrame(animation)
    }
    animation()
  }
)

export const themeColorSlice = createSlice({
  name: 'themeColor',
  initialState,
  reducers: {
    // テーマカラーをリセットする
    resetColor: (state) => {
      state.color = initialState.color
    },
    // テーマカラーを変更する
    changeColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload
    },
  },
  extraReducers: (builder) => builder.addCase(error.fulfilled, () => {}),
})

export const themeColorReducer = themeColorSlice.reducer
