import { createSlice } from "@reduxjs/toolkit"

export interface MenuSlice {
    value : boolean,
    Titles: Title[]
}
interface Title{
    Titles: string
}
const initialState : MenuSlice = {
    value: false,
    Titles : []
}
export const MenuSlice = createSlice({
    name: 'Menu',
    initialState,
    reducers: {
        active: (state) => {
            state.value = true

        },
        deactive: (state) => {
            state.value = false
        },
        setTitle: (state,action) => {
            state.Titles = [{...action.payload}]
        }

    }
})
export const {active,deactive,setTitle} = MenuSlice.actions
export default MenuSlice.reducer