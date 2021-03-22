import { createSlice } from '@reduxjs/toolkit' 
import * as M from '../models'
import type {RootState} from '../store'

const initialState: M.ShapesRootState = {
    PainterTypes:[],
    TopologyTypes:[],
    SObjects:{}

}

export const shapesSlice = createSlice({
    name:"shapes",
    initialState: M.RootRoot {
    },
    reducers:{

    }
})

