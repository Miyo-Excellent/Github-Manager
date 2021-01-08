export const search = async (query = '', onError) => {
  try {
    const response = await fetch(`https://api.github.com/search/code?q=${query}`);

    const responseJson = await response.json();

    return responseJson;
  } catch (error) {
    await onError(error);
  }
};
export const getUser = async (username = '', onError) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    const responseJson = await response.json();

    return responseJson;
  } catch (error) {
    await onError(error);
  }
};

export const getUserRepos = async (username = '', onError) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);

    const responseJson = await response.json();

    return responseJson.map(
      ({
        name,
        size,
        language,
        owner,
        full_name: fullName,
        id,
        url,
        fork,
        description,
        created_at: createdAt,
        updated_at: updatedAt,
        publish_at: publishAt,
      }) => ({
        name,
        size,
        language,
        createdAt,
        updatedAt,
        publishAt,
        owner,
        fullName,
        id,
        url,
        fork,
        description,
      })
    );
  } catch (error) {
    await onError(error);
  }
};
