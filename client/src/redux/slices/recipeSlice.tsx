import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addToaster } from "./ToasterSlice";

const initialState: any = {
  addRecipe: {
    error: [],
    recipe: "",
    loading: false,
  },
  getRecipe: {
    error: [],
    recipe: {},
    loading: true,
  },
  getRecipes: {
    error: [],
    loading: true,
    recipes: [],
  },
  getTags: {
    error: [],
    loading: true,
    tags: [],
  },
};

export const addRecipe = createAsyncThunk(
  "recipe/addRecipe",
  async (
    args: {
      title: string;
      steps: string[];
      tags: string[];
      ingredients: string[];
      description: string;
    },
    thunkAPI
  ) => {
    const { rejectWithValue }: any = thunkAPI;
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/recipes",
        {
          title: args.title,
          steps: args.steps,
          ingredients: args.ingredients,
          tags: args.tags,
          description: args.description,
        },
        {
          withCredentials: true,
        }
      );

      return data.data._id;
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

export const getRecipe = createAsyncThunk(
  "recipe/getReciepe",
  async (
    args: {
      id: string;
    },
    thunkAPI
  ) => {
    const { rejectWithValue }: any = thunkAPI;
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/recipes/" + args.id,
        {
          withCredentials: true,
        }
      );
      console.log(data.data);

      return data.data;
    } catch (err: any) {
      console.log("as");

      err.response.data.error.map((err: any) =>
        thunkAPI.dispatch(
          addToaster(
            err.field
              ? "<span className='font-bold'> " +
                  err.field +
                  " :</span> " +
                  err.message
              : err.message
          )
        )
      );

      return rejectWithValue(err.response.data.error);
    }
  }
);

export const getRecipes = createAsyncThunk(
  "recipe/getReciepes",
  async (_, thunkAPI) => {
    const { rejectWithValue }: any = thunkAPI;
    try {
      const { data } = await axios.get("http://localhost:5000/api/recipes/", {
        withCredentials: true,
      });

      return data.data;
    } catch (err: any) {
      console.log("as");

      err.response.data.error.map((err: any) =>
        thunkAPI.dispatch(
          addToaster(
            err.field
              ? "<span className='font-bold'> " +
                  err.field +
                  " :</span> " +
                  err.message
              : err.message
          )
        )
      );

      return rejectWithValue(err.response.data.error);
    }
  }
);
export const getTags = createAsyncThunk(
  "recipe/getTags",
  async (_, thunkAPI) => {
    const { rejectWithValue }: any = thunkAPI;
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/recipes/tags",
        {
          withCredentials: true,
        }
      );

      return data.data;
    } catch (err: any) {
      err.response.data.error.map((err: any) =>
        thunkAPI.dispatch(
          addToaster(
            err.field
              ? "<span className='font-bold'> " +
                  err.field +
                  " :</span> " +
                  err.message
              : err.message
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
  reducers: {
    resetRecipe: (state) => {
      state.addRecipe.recipe = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addRecipe.fulfilled, (state, action) => {
      state.addRecipe.recipe = action.payload;
      state.addRecipe.loading = false;
    });
    builder.addCase(addRecipe.pending, (state, action) => {
      state.addRecipe.loading = true;
      state.addRecipe.error = "";
    });
    builder.addCase(addRecipe.rejected, (state, action: any) => {
      state.addRecipe.loading = false;
      state.addRecipe.error = action.payload;
    });

    builder.addCase(getRecipe.fulfilled, (state, action) => {
      state.getRecipe.recipe = action.payload;
      state.getRecipe.loading = false;
    });
    builder.addCase(getRecipe.pending, (state, action) => {
      state.getRecipe.loading = true;
      state.getRecipe.error = "";
    });
    builder.addCase(getRecipe.rejected, (state, action: any) => {
      state.getRecipe.loading = false;
      state.getRecipe.error = action.payload;
    });

    builder.addCase(getRecipes.fulfilled, (state, action) => {
      state.getRecipes.recipes = action.payload;
      state.getRecipes.loading = false;
    });
    builder.addCase(getRecipes.pending, (state, action) => {
      state.getRecipes.loading = true;
      state.getRecipes.error = "";
    });
    builder.addCase(getRecipes.rejected, (state, action: any) => {
      state.getRecipes.loading = false;
      state.getRecipes.error = action.payload;
    });
    builder.addCase(getTags.fulfilled, (state, action) => {
      state.getTags.tags = action.payload;
      state.getTags.loading = false;
    });
    builder.addCase(getTags.pending, (state, action) => {
      state.getTags.loading = true;
      state.getTags.error = "";
    });
    builder.addCase(getTags.rejected, (state, action: any) => {
      state.getTags.loading = false;
      state.getTags.error = action.payload;
    });
  },
});

export const { resetRecipe } = recipeSlice.actions;

export default recipeSlice;
