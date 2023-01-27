import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addToaster } from "./ToasterSlice";

const initialState: any = {
  addReciepe: {
    error: [],
    recipe: {},
    loading: false,
  },
};

export const addReciepe = createAsyncThunk(
  "recipe/addReciepe",
  async (
    args: {
      title: string;
      steps: string[];
      tags: string[];
      ingredients: string[];
    },
    thunkAPI
  ) => {
    const { rejectWithValue }: any = thunkAPI;
    try {
      const { data } = await axios.post("http://localhost:5000/api/recipes", {
        title: args.title,
        steps: args.steps,
        ingredients: args.ingredients,
        tags: args.tags,
      });
      console.log(data.data);
      return data.data;
    } catch (err: any) {
      err.response.data.error.map((err: any) =>
        thunkAPI.dispatch(
          addToaster(
            "<span className='font-bold'> " +
              err.field +
              " :</span> " +
              err.message
          )
        )
      );

      return rejectWithValue(err.response.data.error);
    }
  }
);

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(signin.fulfilled, (state, action) => {
    //   state.user = action.payload;
    //   state.loading = false;
    // });
    // builder.addCase(signin.pending, (state, action) => {
    //   state.loading = true;
    //   state.error = "";
    // });
    // builder.addCase(signin.rejected, (state, action: any) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // });
  },
});

export default recipeSlice;
