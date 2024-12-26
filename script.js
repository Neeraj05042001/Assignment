import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          className="logo-image"
          src="https://img.freepik.com/free-vector/food-delivery-illustration-with-bike-man-courier_1308-51210.jpg?t=st=1735173290~exp=1735176890~hmac=cf71af9dd98bb1194dd6cee67ce1f102a1fc9f02371aedbdd6e93aaeca523d4f&w=740"
          alt="Logo-image"
        />
      </div>

      <nav className="nav-links">
        <ul className="nav-list">
          <li>
            <a href="##">Home</a>
          </li>
          <li>
            <a href="##">About Us</a>
          </li>
          <li>
            <a href="##">Contact Us</a>
          </li>
          <li>
            <a href="##">
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const {name, cloudinaryImageId, cuisines, costForTwo, avgRating} = resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-img"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData?.info.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "905029",
      name: "Food Factory@99",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/7/ca86a332-9b13-4bdb-b98c-eef54d55bbf9_905029.JPG",
      locality: "SPARK DIVINE",
      areaName: "Greater Noida",
      costForTwo: "₹300 for two",
      cuisines: ["Indian"],
      avgRating: 3.7,
      parentId: "526468",
      avgRatingString: "3.7",
      totalRatingsString: "156",
      sla: {
        deliveryTime: 15,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-27 05:29:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        subHeader: "UPTO ₹45",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-92f33230-da0f-4f89-8139-a669b1e55dd9",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/food-factory-99-spark-divine-greater-noida-rest905029",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "994476",
      name: "Olio - The Wood Fired Pizzeria",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/2fbc6646-ac27-42c4-b7ad-801002b380df_994476.jpg",
      locality: "Gautam Buddha Nagar",
      areaName: "Alpha 2",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Pastas", "Fast Food", "Snacks", "Beverages"],
      avgRating: 3.2,
      parentId: "11633",
      avgRatingString: "3.2",
      totalRatingsString: "28",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-27 05:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-92f33230-da0f-4f89-8139-a669b1e55dd9",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/olio-the-wood-fired-pizzeria-gautam-buddha-nagar-alpha-2-rest994476",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "22567",
      name: "Desi Galli",
      cloudinaryImageId: "jmc97xpl7eln0vy8udme",
      locality: "Beta 1",
      areaName: "Greater Noida",
      costForTwo: "₹400 for two",
      cuisines: ["Mughlai", "North Indian", "Chinese"],
      avgRating: 4,
      parentId: "16322",
      avgRatingString: "4.0",
      totalRatingsString: "4.2K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-27 05:29:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹50 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.9",
          ratingCount: "113",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-92f33230-da0f-4f89-8139-a669b1e55dd9",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/desi-galli-beta-1-greater-noida-rest22567",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "778380",
      name: "Krishna Foods",
      cloudinaryImageId: "a436fdce0f2e294927ad0aa3d48609ce",
      locality: "Gautam Buddha Nagar",
      areaName: "Greater Noida",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "Thalis",
        "Chinese",
        "American",
        "Biryani",
        "Desserts",
        "Tandoor",
        "Snacks",
        "Beverages",
        "Burger",
      ],
      avgRating: 4.1,
      veg: true,
      parentId: "120828",
      avgRatingString: "4.1",
      totalRatingsString: "4.5K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-27 05:29:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹95",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-92f33230-da0f-4f89-8139-a669b1e55dd9",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/krishna-foods-gautam-buddha-nagar-greater-noida-rest778380",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "967785",
      name: "Baap Of Rolls",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/3/d86f3460-69a0-4e97-97e2-0a6cad6ea35b_967785.jpg",
      locality: "Greater Noida",
      areaName: "Greater Noida",
      costForTwo: "₹199 for two",
      cuisines: ["Beverages", "Snacks"],
      avgRating: 4.2,
      parentId: "14310",
      avgRatingString: "4.2",
      totalRatingsString: "66",
      sla: {
        deliveryTime: 16,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-27 05:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-92f33230-da0f-4f89-8139-a669b1e55dd9",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/baap-of-rolls-greater-noida-rest967785",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "430244",
      name: "The Waffle Co.",
      cloudinaryImageId: "2d5e5466ab09670ad6fe3bf90ba84b61",
      locality: "Alpha 1",
      areaName: "Alpha 1",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Waffle", "Beverages"],
      avgRating: 4.5,
      veg: true,
      parentId: "5143",
      avgRatingString: "4.5",
      totalRatingsString: "2.7K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-27 05:29:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Waffle.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Waffle.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "59",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-92f33230-da0f-4f89-8139-a669b1e55dd9",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/the-waffle-co-alpha-1-rest430244",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "710518",
      name: "Pizza House",
      cloudinaryImageId: "a0250ae5bee392b20cc51ca3fd9eceda",
      locality: "Gautam Buddha Nagar",
      areaName: "Greater Noida",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas", "Salads", "Beverages", "Indian"],
      avgRating: 2.3,
      veg: true,
      parentId: "7782",
      avgRatingString: "2.3",
      totalRatingsString: "7",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-27 05:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-92f33230-da0f-4f89-8139-a669b1e55dd9",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/pizza-house-gautam-buddha-nagar-greater-noida-rest710518",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "876016",
      name: "Sashmicks Bakery",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/1/266670e0-1dd6-4147-92c7-0042e4280cf6_876016ssss.jpg",
      locality: "Alpha I",
      areaName: "Greater Noida",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Bakery"],
      avgRating: 4.4,
      parentId: "406201",
      avgRatingString: "4.4",
      totalRatingsString: "55",
      sla: {
        deliveryTime: 13,
        lastMileTravel: 0.3,
        serviceability: "SERVICEABLE",
        slaString: "10-15 mins",
        lastMileTravelString: "0.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-27 05:29:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹75",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-92f33230-da0f-4f89-8139-a669b1e55dd9",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/sashmicks-bakery-alpha-i-greater-noida-rest876016",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const Body = () => {
  return (
    <main className="body">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Your Favourite Food or Restaurant"
        />
      </div>

      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </main>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />,
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
