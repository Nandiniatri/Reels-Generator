import { createSlice , nanoid} from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { 
    templates : []
}

export const fetchTempleteData = createAsyncThunk(
    'template/fetchTempleteData',
    async () => {
        const response = await fetch('/api/templates');
        // console.log(response);
        
        const result = await response.json();
        // console.log("result" , result);
        
        return result;
    }
)

const templatesSlice = createSlice({
    name:'Template',
    initialState,
    reducers:{},
    extraReducers: (builders) =>{
        builders
        .addCase(fetchTempleteData.pending ,(state) =>{
            state.status = 'pending'
        })
        .addCase(fetchTempleteData.fulfilled ,(state , action) =>{
            state.status = 'fullfilled'
            state.templates = action.payload;
        })
        .addCase(fetchTempleteData.rejected ,(state , action) =>{
            state.status = 'rejected'
            state.users = action.error.message; 
        })
    } 
})

// export const {templateData} = templatesSlice.actions

export default templatesSlice.reducer;