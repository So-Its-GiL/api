// Your JSON object
const json = {
    "Id": "56709726",
    "PartNumber": "0",
    "ManufacturerName": "BEL/CINCH CONNECTIVITY/INDUSTRIAL",
    "LeadTime": "10",
    "InventoryList": [],
    "MinOrderQuantity": "1",
    "StandardPackQuantity": "1",
    "StockQuantity": 0,
    "HTS": null,
    "UOM": "EA",
    "Rohs": null,
    "ECCN": null,
    "DataSheetLink": "null",
    "LargeImage": "null",
    "Description": "null",
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
    };

// Get the output element from the HTML document
const outputElement = document.getElementById("output");

// Create HTML content using the values from the JSON object
const htmlContent = `
    <p>ID: ${json.Id}</p>
    <p>Part Number: ${json.PartNumber}</p>
    <p>Manufacturer Name: ${json.ManufacturerName}</p>
    <p>Lead Time: ${json.LeadTime}</p>
    <p>Min Order Quantity: ${json.MinOrderQuantity}</p>
    <p>Standard Pack Quantity: ${json.StandardPackQuantity}</p>
    <p>Stock Quantity: ${json.StockQuantity}</p>
    <p>UOM: ${json.UOM}</p>
    <p>Data Sheet Link: ${json.DataSheetLink}</p>
    <p>Description: ${json.Description}</p>
`;

// Set the innerHTML of the output element with the created HTML content
outputElement.innerHTML = htmlContent;
