import fetch from "cross-fetch";
export const getRestaurant = async (req, res) => {
  try {
    const { lat, lng } = req.query;
    const URL = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING`;

    const response = await fetch(URL, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
      },
    });
    const data = await response.json();

    return res.status(200).json({
      data: data,
    });
  } catch (error) {
    console.log(error);
    return res.status(501).json({
      success: false,
      message: "Something went wrong",
      data: {},
      error: error,
    });
  }
};

export const getMenu = async (req, res) => {
  try {
    const { lat, lng, restaurantId } = req.query;

    const URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&submitAction=ENTER&restaurantId=${restaurantId}`;

    const response = await fetch(URL, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
      },
    });

    const data = await response.json();

    return res.status(200).json({
      data: data,
    });
  } catch (error) {
    console.log(error);
    return res.status(501).json({
      success: false,
      message: "Something went wrong",
      data: {},
      error: error,
    });
  }
};
