export const itemData = {
  validItem: {
    _id: "507f191e810c19729de860ea",
    owner: "634ea905f0c2bea76c657643",
    createdAt: "2022-11-02T06:26:20.806Z",
    itemName: "Hammar",
    stock: 1000,
    unitPrice: 5000,
  },
  validItemsList: [
    {
      _id: "507f191e810c19729de860ea",
      owner: "634ea905f0c2bea76c657643",
      createdAt: "2022-11-02T06:26:20.806Z",
      itemName: "Hammar",
      stock: 1000,
      unitPrice: 5000,
    },
    {
      _id: "507f191e810c19729de860eb",
      owner: "634ea905f0c2bea76c657643",
      createdAt: "2022-11-02T06:26:20.806Z",
      itemName: "Hammar",
      stock: 1000,
      unitPrice: 5000,
    },
  ],
  invalidItem: {},
  emptyItemList: [],
};

export const orderData = {
  validOrder:{
    _id:"635fe0c5a158d81aaf45e542",
    orderItems:[{
      item:"635ecc214f31111a927db2d7",
      supplierDetails:"634ea905f0c2bea76c657643",
      quantity:45,
      agreedPrice:"45000",
      _id:"6360002aa158d81aaf47a81e"
    }],
    totalAmount:"55000",
    referenceNo:"ORD_REFtDKZ_-OYx",
    orderStatus:2,
    createdAt:"2022-10-31T14:50:45.724+00:00"
  },
  validOrderList:[
    {
      _id:"635fe0c5a158d81aaf45e542",
      orderItems:[{
        item:"635ecc214f31111a927db2d7",
        supplierDetails:"634ea905f0c2bea76c657643",
        quantity:45,
        agreedPrice:"45000",
        _id:"6360002aa158d81aaf47a81e"
      }],
      totalAmount:"55000",
      referenceNo:"ORD_REFtDKZ_-OYx",
      orderStatus:2,
      createdAt:"2022-10-31T14:50:45.724+00:00"
    },
    {
      _id:"635fe0c5a158d81aaf45e543",
      orderItems:[{
        item:"635ecc214f31111a927db2d7",
        supplierDetails:"634ea905f0c2bea76c657643",
        quantity:45,
        agreedPrice:"45000",
        _id:"6360002aa158d81aaf47a82b"
      }],
      totalAmount:"55000",
      referenceNo:"ORD_REFtDKZ_-RXy",
      orderStatus:2,
      createdAt:"2022-10-31T14:50:45.724+00:00"
    }
  ],
  updatedOrder:{
    _id:"635fe0c5a158d81aaf45e543",
    orderItems:[{
      item:"635ecc214f31111a927db2d7",
      supplierDetails:"634ea905f0c2bea76c657643",
      quantity:45,
      agreedPrice:"45000",
      _id:"6360002aa158d81aaf47a82b"
    }],
    totalAmount:"55000",
    referenceNo:"ORD_REFtDKZ_-RXy",
    orderStatus:1,
    createdAt:"2022-10-31T14:50:45.724Z"
  },
  updateRequest:{
    orderStatus:1
  },
  invalidOrder: {},
  emptyOrderList:[]
}