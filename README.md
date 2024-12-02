# Custom Gang Sheet Builder Integration

DripApps provides a custom Gang Sheet Builder that can be integrated into your store. \
The Gang Sheet Builder allows your customers to create custom Gang Sheets for your gang sheet products from within your custom store.

#### 1. Installation

Add the following script tag to your HTML file.

```html

<script src="https://app.buildagangsheet.com/assets/v1/scripts/gs-builder.min.js"></script>
```

#### 2. Create New Gang Sheets

The above script will expose a global variable `gs_builder` which can be used to open the Gang Sheet Builder modal. \
Call the `open` method on the `gs_builder` object to open the Gang Sheet Builder modal. \
You need to pass the `shop_id` of your store to the `open` method. \
You can get the Shop ID from your store dashboard.

```javascript
 function createGangSheet() {
    gs_builder.open({
        container: 'gs-builder', // optional - id of the element for the modal to be rendered in.
        mode: 'production', // optional, default: 'production', possible values: 'production', 'development'
        shop_id: [SHOP_ID], // required
        size_id: 2, // optional, default: the first size.
        sizes: [
            {
                id: 1, // Required
                width: 22, // required
                height: 22, // required
                unit: 'in', // optional, default: "in"
                title: '22 in X 22 in', // optional, default: "{width}{unit} x {height}{unit}"
                metadata: { // optional
                    'meta_id': 1
                }
            },
            {
                id: 2,
                width: 22,
                height: 60,
                metadata: {
                    'meta_id': 2
                }
            },
            {
                id: 3,
                width: 22,
                height: 120
            }
        ]
    }).on('design:created', (e) => {
        console.log(e)
        gs_builder.close()
    }).on('closed', () => {
        // this event is triggered when a customer clicks the close button from the buidler.
        console.log(e)
    })
}
```

#### 3. Edit Existing Gang Sheets

In order to edit an existing Gang Sheet, you need to pass the `design_id` of the Gang Sheet to the `open` method.

```javascript
function editGangSheet() {
    gs_builder.open({
        shop_id: [SHOP_ID],
        design_id: [Design_ID],
    }).on({
        'design:updated': (e) => {
            console.log(e)
            gs_builder.close()
        }
    })
}
```

#### 3. Generate Gang Sheet Image

In order to generate the Gang Sheet image, you need to make a POST request to the following endpoint.
You can create the Api token from your store dashboard.

```http
POST /api/v1/design/generate HTTP/1.1
Host: app.buildagangsheet.com
Content-Type: application/json
Authorization: Bearer [API_TOKEN]

{
    "design_id" : [DESIGN_ID],
    "file_name": "gang_sheet.png" // optional
}
```
 