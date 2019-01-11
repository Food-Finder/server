# server

# Food-Finder
REST API built with Express and 3partys API
List of basic routes :

| ROUTE             | HTTP | HEADER(S) |     BODY     |   DESCRIPTION   |
| ----------------- | ---- | --------- | ------------ | --------------- |
| `/api/register` | **POST** | `none` | `fullname: String (`**`Required`**`), email: String (`**`Required`**`), password: String (`**`Required`**`)` | Create a user |
| `/api/login` | **POST** | `none` | `email: String (`**`Required`**`), password: String (`**`Required`**`)` | Login user |


List of user routes :

| ROUTE             | HTTP | HEADER(S) |     BODY     |   DESCRIPTION   |
| ----------------- | ---- | --------- | ------------ | --------------- |
| `/food/categories` | **GET** | `user-key` | `none` | Get all the Categories (**Admin Only**)|
| `/food/collections` | **GET** | `userkey` | `none` | Get all the collections (**Admin And Authenticated User**)|
| `/food/cuisines` | **GET** | `userkey` | `none` | Get all the cuisines (**Admin And Authenticated User**)|
| `/food/establishments` | **GET** | `userkey` | `none` | Get all the establisments (**Admin And Authenticated User**)|
| `/food/search` | **GET** | `userkey` | `none` | Get the restaurants by name (**Admin And Authenticated User**)|

## Data Sample

### Categories
```
{
    "categories": [
        {
            "categories": {
                "id": 1,
                "name": "Delivery"
            }
        },
        {
            "categories": {
                "id": 2,
                "name": "Dine-out"
            }
        },
        {
            "categories": {
                "id": 3,
                "name": "Nightlife"
            }
        },
        {
            "categories": {
                "id": 4,
                "name": "Catching-up"
            }
        },
        {
            "categories": {
                "id": 5,
                "name": "Takeaway"
            }
        }
    ]
}
```

### Collections

```
{
    "collections": [
        {
            "collection": {
                "collection_id": 1,
                "res_count": 30,
                "image_url": "https://b.zmtcdn.com/data/collections/b53772a204429cb9b42313d6dc22bf3c_1535469399.jpg",
                "url": "https://www.zomato.com/jakarta/top-restaurants?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "title": "Trending This Week",
                "description": "30 most popular restaurants in town this week",
                "share_url": "http://www.zoma.to/c-74/1"
            }
        },
        {
            "collection": {
                "collection_id": 277744,
                "res_count": 14,
                "image_url": "https://b.zmtcdn.com/data/collections/d3dac2f797ed3210a89e90acabf3ad6a_1530612131.jpg",
                "url": "https://www.zomato.com/jakarta/popular-gold-restaurants?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "title": "Popular Gold Restaurants",
                "description": "Explore the most popular Zomato Gold partner restaurants",
                "share_url": "http://www.zoma.to/c-74/277744"
            }
        },
        {
            "collection": {
                "collection_id": 29,
                "res_count": 22,
                "image_url": "https://b.zmtcdn.com/data/collections/7bef8e84e64ccf5b728c77510b7d52ad_1535355701.jpg",
                "url": "https://www.zomato.com/jakarta/best-new-restaurants?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "title": "Newly Opened",
                "description": "The best new places in town",
                "share_url": "http://www.zoma.to/c-74/29"
            }
        },
        {
            "collection": {
                "collection_id": 274852,
                "res_count": 227,
                "image_url": "https://b.zmtcdn.com/data/collections/5ac5eeae0796f422298ee67d5b66a025_1535368421.jpg",
                "url": "https://www.zomato.com/jakarta/great-food-no-bull?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "title": "Great Food, No Bull",
                "description": "The hunt for the highest-rated restaurants in your city ends here",
                "share_url": "http://www.zoma.to/c-74/274852"
            }
        }
    ]
}
```

### Cuisines

```
{
    "cuisines": [
        {
            "cuisine": {
                "cuisine_id": 237,
                "cuisine_name": "Aceh"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 1,
                "cuisine_name": "American"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 4,
                "cuisine_name": "Arabian"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 3,
                "cuisine_name": "Asian"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 401,
                "cuisine_name": "Asian Fusion"
            }
        }
    ]
}
```

### Establishments

```
{
    "establishments": [
        {
            "establishment": {
                "id": 21,
                "name": "Quick Bites"
            }
        },
        {
            "establishment": {
                "id": 23,
                "name": "Dessert Parlour"
            }
        },
        {
            "establishment": {
                "id": 41,
                "name": "Beverage Shop"
            }
        },
        {
            "establishment": {
                "id": 1,
                "name": "Café"
            }
        },
        {
            "establishment": {
                "id": 20,
                "name": "Food Court"
            }
        }
    ]
}
```

### Search

```
{
    "results_found": 193,
    "results_start": 0,
    "results_shown": 20,
    "restaurants": [
        {
            "restaurant": {
                "R": {
                    "res_id": 7419572
                },
                "apikey": "f54e6064aaee1d17a94956152a94e0ad",
                "id": "7419572",
                "name": "Sana Sini Restaurant - Pullman Jakarta Indonesia",
                "url": "https://www.zomato.com/jakarta/sana-sini-restaurant-thamrin?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "location": {
                    "address": "Pullman Jakarta Indonesia, Jl. M.H. Thamrin 59, Thamrin, Jakarta",
                    "locality": "Pullman Jakarta Indonesia, Thamrin",
                    "city": "Jakarta",
                    "city_id": 74,
                    "latitude": "-6.1938884997",
                    "longitude": "106.8233778700",
                    "zipcode": "",
                    "country_id": 94,
                    "locality_verbose": "Pullman Jakarta Indonesia, Thamrin, Jakarta"
                },
                "switch_to_order_menu": 0,
                "cuisines": "Japanese, Chinese, Western, Indonesian",
                "average_cost_for_two": 750000,
                "price_range": 4,
                "currency": "IDR",
                "offers": [],
                "zomato_events": [
                    {
                        "event": {
                            "event_id": 296828,
                            "friendly_start_date": "04 February",
                            "friendly_end_date": "05 February",
                            "friendly_timing_str": "Monday, 4th February - Tuesday, 5th February",
                            "start_date": "2019-02-04",
                            "end_date": "2019-02-05",
                            "end_time": "10:00:00",
                            "start_time": "19:00:00",
                            "is_active": 1,
                            "date_added": "2019-01-08 14:42:02",
                            "photos": [
                                {
                                    "photo": {
                                        "url": "https://b.zmtcdn.com/data/zomato_events/photos/165/419403bcc03c482040d2140ce60a7165_1546938832.jpg",
                                        "thumb_url": "https://b.zmtcdn.com/data/zomato_events/photos/165/419403bcc03c482040d2140ce60a7165_1546938832.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                                        "order": 0,
                                        "md5sum": "419403bcc03c482040d2140ce60a7165",
                                        "id": 400685,
                                        "photo_id": 400685,
                                        "uuid": 2775275168,
                                        "type": "NORMAL"
                                    }
                                }
                            ],
                            "restaurants": [],
                            "is_valid": 1,
                            "share_url": "http://www.zoma.to/r/0",
                            "show_share_url": 0,
                            "title": "CHINESE NEW YEAR CELEBRATION",
                            "description": "Dinner on 4 February IDR 628,000++\nBrunch on 5 February IDR 520,000++\n\nTreat your taste-buds with sumptuous dishes to begin the Year of the Pig at our award-winning restaurant. Let us make your celebration more exciting with a complimentary of Prosperity Yee Sang and lion dance performance.\n\nEarly bird:\n15% off before 15 Jan\n10% off before 27 Jan\n\n\nMake your reservation now!\n☎ +62 21 3906 444\n✉ H8491-FB3@accor.com",
                            "display_time": "07:00 pm - 10:00 am",
                            "display_date": "04 February - 05 February",
                            "is_end_time_set": 1,
                            "disclaimer": "Restaurants are solely responsible for the service; availability and quality of the events including all or any cancellations/ modifications/ complaints.",
                            "event_category": 1,
                            "event_category_name": "",
                            "book_link": "",
                            "types": [
                                {
                                    "name": "Chinese New Year",
                                    "color": "#D39124"
                                }
                            ],
                            "share_data": {
                                "should_show": 0
                            }
                        }
                    }
                ],
                "opentable_support": 0,
                "is_zomato_book_res": 0,
                "mezzo_provider": "OTHER",
                "is_book_form_web_view": 0,
                "book_form_web_view_url": "",
                "book_again_url": "",
                "thumb": "https://b.zmtcdn.com/data/pictures/2/7419572/e419db7f6b38f7167f6ff7e57d6ffec9.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                "user_rating": {
                    "aggregate_rating": "4.7",
                    "rating_text": "Excellent",
                    "rating_color": "3F7E00",
                    "votes": "704"
                },
                "photos_url": "https://www.zomato.com/jakarta/sana-sini-restaurant-thamrin/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                "menu_url": "https://www.zomato.com/jakarta/sana-sini-restaurant-thamrin/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                "featured_image": "https://b.zmtcdn.com/data/pictures/2/7419572/e419db7f6b38f7167f6ff7e57d6ffec9.jpg",
                "has_online_delivery": 0,
                "is_delivering_now": 0,
                "include_bogo_offers": true,
                "deeplink": "zomato://restaurant/7419572",
                "is_table_reservation_supported": 0,
                "has_table_booking": 0,
                "events_url": "https://www.zomato.com/jakarta/sana-sini-restaurant-thamrin/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "establishment_types": []
            }
        }
    ]
}
```

## Usage

Make sure you have **Node.js** and **npm** installed in your computer, and then run these commands:
```
$ npm install
$ npm start
```

Access the API via `http://localhost:3000/`.