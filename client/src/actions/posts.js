import * as api from '../api/index.js';

//api.fetchPosts
// Actions Creaters
export const getPosts = () => async(dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({type:'FETCH_ALL', payload: data });
    } catch (error) {
        console.lof(error.message);
    }




    const action = { type: 'FETCH_ALL', payload: [] }

  dispatch (action);
}