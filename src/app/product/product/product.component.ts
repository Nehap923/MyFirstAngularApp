import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
   products=[
      {
        "productName": "Samsung GalaxyS10",
        "Quantity": 1,
        "price": "66,900",
        "description": "Exp. release 2019, March 8, 157g, 7.8mm thickness, Android 9.0; One UI, 128/512GB storage, microSD card slot",
        "productCode": "Samsung",
        "productImage": "https://images.samsung.com/in/smartphones/galaxy-s10/buy/m-img-s10e-prismblack-01.png"
      },
      {
        "productName": "Samsung Galaxy M20",
        "Quantity": 6,
        "price": "12,989.00",
        "description": "13MP+5MP ultra-wide dual camera , 8MP f2.0 front camera\n16cm (6.3\") Full HD+ Infinity V Display with 2340x1080 crystal clear resolution (409 PPI)\n5000 mAh battery with 3x fast charge , 15W Type-C fast charger in the box\n4GB RAM and 64GB internal memory expandable up to 512GB in a dedicated slot",
        "productCode": "Samsung",
        "productImage": "https://images-na.ssl-images-amazon.com/images/I/71gLBOMtCTL._SL1500_.jpg"
      },
      {
        "productName": "Samsung Galaxy A8 Star",
        "Quantity": 1,
        "price": "23,980.00",
        "description": "Camera: 24+16 MP Dual rear camera |,24 MP front camera\nDisplay: 16.0 centimetres (6.3-inch) FHD+ Super AMOLED with 1080x2220 pixels\nMemory, Storage & SIM: 6GB RAM |,64GB storage expandable up to 400GB |,Dual SIM with dual-standby (4G+4G)\nOperating System and Processor: Android v8.0 operating system with 2.2GHz SDM660 Snapdragon Qualcomm octa core processor\nBattery: 3700 mAH lithium ion battery",
        "productCode": "Samsung",
        "productImage": "https://images-na.ssl-images-amazon.com/images/I/61F5WIQMg%2BL._SL1500_.jpg"
      },
      {
        "productName": "Nokia 8.1",
        "Quantity": 4,
        "price": "29,999.00",
        "description": "12MP+13MP dual rear camera |,20MP front camera\n15.69 centimeters (6.18-inch) FHD+ multi-touch capacitive touchscreen with 1080 x 2246 pixels resolution and 18.7:9 aspect ratio\nMemory, Storage and SIM: 6GB RAM , 128GB internal memory expandable up to 400GB |,Dual SIM (nano+nano) dual-standby (4G+4G)\nAndroid Pie v9 operating system with 2.2GHz Qualcomm Snapdragon 710 mobile platform octa core processor\n3500mAH lithium-ion battery",
        "productCode": "Nokia",
        "productImage": "https://images-na.ssl-images-amazon.com/images/I/61brRkunYCL._SL1127_.jpg"
      },
      {
        "productName": "Redmi 6 Pro",
        "Quantity": 4,
        "price": "10,999.00",
        "description": "Camera: 12+5 MP Dual rear camera , 5 MP front camera\nDisplay: 14.8 centimetres (5.84-inch) Full HD+ capacitive touchscreen with 2280x1080 pixels and 432 ppi pixel density\nMemory, Storage & SIM: 4GB RAM , 64GB storage expandable up to 256GB , Dual SIM, 4G +4G, standby (one sim supports 4G at a time)\nOperating System and Processor: Android v8.1 Oreo operating system with 2.0GHz Qualcomm snapdragon 625 octa core processor\nBattery: 4000 mAH lithium Polymer battery",
        "productCode": "Redmi",
        "productImage": "https://images-na.ssl-images-amazon.com/images/I/81xl7IHBw-L._SL1500_.jpg"
      },
      {
        "productName": "OnePlus 6T",
        "Quantity": 3,
        "price": "37,999.00",
        "description": "Camera: 16+20 MP Dual rear camera with Optical Image Stabilization, Super slow motion, Nightscape and Studio Lighting |,16 MP front camera\nDisplay: 6.41-inch(16.2 cms) Full HD+ Optic AMOLED display with 2340 x 1080 pixels resolution and an 86% screen-to-body ratio\nMemory, Storage & SIM: 6GB RAM , 128GB storage ,Dual nano SIM with dual standby (4G+4G)\nScreen Unlock: In-screen fingerprint sensor. The OnePlus 6T unlocks in 0.34s for a seamless and intuitive unlock experience\nOperating System and Processor: OxygenOS based on Android 9.0 Pie with 2.8GHz Qualcomm Snapdragon 845 octa-core processor\nBattery : 3700 mAh lithium-polymer battery with Fast Charge technology",
        "productCode": "OnePlus",
        "productImage": "https://images-na.ssl-images-amazon.com/images/I/51h6kIDyqtL._SL1300_.jpg"
      },
      {
        "productName": "Samsung Galaxy J6",
        "Quantity": 2,
        "price": "11,990.00",
        "description": "Camera: 13 MP Rear camera with Action animated GIF, Beauty face, Best photo, Face detection, HDR, Mirror selfie, Panorama , 8 MP front camera\nDisplay: 14.224 centimeters (5.6-inch) HD+ Super AMOLED capacitive touchscreen display with 720x1480 pixels\nMemory, Storage & SIM: 4GB RAM,64GB storage expandable up to 256GB,Dual nano SIM with dual standby (4G+4G)\nOperating System and Processor: Android v8.0 Oreo operating system with 1.6GHz S5E7870 Exyn operating system 7870 octa core processor\nBattery: 3000 mAH lithium ion battery",
        "productCode": "Samsung",
        "productImage": "https://images-na.ssl-images-amazon.com/images/I/51zKgf9S7ZL._SL1500_.jpg"
      },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
