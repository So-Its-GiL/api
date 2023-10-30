// Updated JSON data
const newData = [
    {
        "Id": "12246013",
        "PartNumber": "0464234009",
        "ManufacturerName": "TE CONNECTIVITY / RAYCHEM",
        "LeadTime": "7",
        "InventoryList": [],
        "MinOrderQuantity": "1",
        "StandardPackQuantity": "1",
        "StockQuantity": 0,
        "HTS": "3926909090",
        "UOM": "FT",
        "Rohs": "Y",
        "ECCN": null,
        "DataSheetLink": "null",
        "LargeImage": "null",
        "Description": "MIL-LT-3/32-0-SP-CS7227",
        "PriceList": []
    },
    {
        "Id": "12246053",
        "PartNumber": "050671-000",
        "ManufacturerName": "TE CONNECTIVITY / RAYCHEM",
        "LeadTime": "8",
        "InventoryList": [],
        "MinOrderQuantity": "1",
        "StandardPackQuantity": "1",
        "StockQuantity": 0,
        "HTS": "8538900000",
        "UOM": "EA",
        "Rohs": null,
        "ECCN": null,
        "DataSheetLink": "https://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=1654025_Sec8_B-155_CWT_D-110_D-1744&DocType=Catalog+Section&DocLang=English&PartCntxt=050671-000&DocFormat=pdf",
        "LargeImage": "https://www.te.com/catalog/common/images/PartImages/prso1solderslve.jpg",
        "Description": "null",
        "PriceList": []
    }
];

// Get the output element from the HTML document
const outputElement = document.getElementById("output");

// Create HTML content using the values from the updated JSON data
let htmlContent = '';
newData.forEach(item => {
    htmlContent += `
        <div>
            <p>ID: ${item.Id}</p>
            <p>Part Number: ${item.PartNumber}</p>
            <p>Manufacturer Name: ${item.ManufacturerName}</p>
            <p>Lead Time: ${item.LeadTime}</p>
            <p>Min Order Quantity: ${item.MinOrderQuantity}</p>
            <p>Standard Pack Quantity: ${item.StandardPackQuantity}</p>
            <p>Stock Quantity: ${item.StockQuantity}</p>
            <p>HTS: ${item.HTS}</p>
            <p>UOM: ${item.UOM}</p>
            <p>Rohs: ${item.Rohs}</p>
            <p>Data Sheet Link: <a href="${item.DataSheetLink}" target="_blank">${item.DataSheetLink}</a></p>
            <p>Large Image: <img src="${item.LargeImage}" alt="Large Image"></p>
            <p>Description: ${item.Description}</p>
            <br>
          <div class="button">
            <a href = "mailto: mailto:aspeed-order@aspeedelectronics.com">Request A Quote</a>
                 </div>
        </div>
        <hr>
    `;
});

// Set the innerHTML of the output element with the created HTML content
outputElement.innerHTML = htmlContent;
