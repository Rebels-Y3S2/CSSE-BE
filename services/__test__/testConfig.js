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
};

export const userData = {
  validUser:{
    _id:"635eca894f31111a927db2ca",
    name:"Saman Wijethilake",
    email:"saman@gmail.com",
    contactNo: "0777985645",
    roleId:"SUPPLIER",
    password:"Testpassword123*",
    description:"A genuine supplier with 10+ years of experience",
    shopName:"Workman",
    address:"50/1B, Baseline Road, Dematagoda",
    imageUrl:"image",
    createdAt:"2022-10-30T19:03:37.566+00:00",
    updatedAt:"2022-10-30T19:03:37.566+00:00"
  },
  validUserList:[
    {
      _id:"635eca894f31111a927db2ca",
      name:"Saman Wijethilake",
      email:"saman@gmail.com",
      contactNo: "0777985645",
      roleId:"SUPPLIER",
      password:"$2b$05$apS5bqjy9.yk.SVJrwkWz.kk8AyiyjrjHdKZ6LRkT.p6p0kg.nZTC",
      description:"A genuine supplier with 10+ years of experience",
      shopName:"Workman",
      address:"50/1B, Baseline Road, Dematagoda",
      imageUrl:"image",
      createdAt:"2022-10-30T19:03:37.566+00:00",
      updatedAt:"2022-10-30T19:03:37.566+00:00"
    },
    {
      _id:"635ecb1b4f31111a927db2cc",
      name:"Janith Perera",
      email:"janith@gmail.com",
      contactNo: "0774563223",
      roleId:"PROCUMENT",
      password:"$2b$05$apS5bqjy9.yk.SVJrwkWz.kk8AyiyjrjHdKZ6LRkT.p6p0kg.nZTC",
      description:"An experienced Procument staff member",
      shopName:"Windage Hardware",
      address:"42/2C, Malwana Road, Malwana",
      imageUrl:"image",
      createdAt:"2022-10-30T19:03:37.566+00:00",
      updatedAt:"2022-10-30T19:03:37.566+00:00"
    }
  ],
  updatedUser:{
      _id:"635eca894f31111a927db2ca",
      name:"Saman Wijethilake",
      email:"saman@gmail.com",
      contactNo: "0777985645",
      roleId:"SUPPLIER",
      password:"Testpassword123*",
      description:"A genuine supplier with 10+ years of experience",
      shopName:"Workman",
      address:"50/1B, Baseline Road, Dematagoda",
      imageUrl:"image",
      createdAt:"2022-10-30T19:03:37.566+00:00",
      updatedAt:"2022-10-30T19:03:37.566+00:00"
  },
  updateRequest:{
    email:"saman123@gmail.com",
  },
  invalidUser: {},
  emptyUserList: [],
};