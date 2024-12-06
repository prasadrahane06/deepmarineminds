import {Asset} from "expo-asset"
const images = {
    news1: Asset.fromModule(require("@/assets/images/local/news1.png")),
    news2: Asset.fromModule(require("@/assets/images/local/news2.png")),
    
  };
export const newsfilterdata = [{
    id:"1",
     title:"🔥Shipping",
     count:10,
     
},
{
    id:"2",
    title:"Ports & Logistics",
    count:2,
},
{
    id:"3",
     title:"Shipbuilding & Operations",
     count:0,
},
{
    id:"4",
    title:"Ship accidents",
    count:0,
},
{
    id:"5",
    title:"Regulation & Law",
    count:0,
},
{
    id:"6",
    title:"Sustainability & Green Technology",
    count:0,
},
{
    id:"7",
    title:"Training & Crewing",
    count:0,
},
{
    id:"8",
    title:"Government",
    count:0,
},]


export const newsData = [
    {
    
        id:"1",
        imagepath:images.news1,
        title:"SHIPPING, security",
        subtitle:"Global shipping industry adapts to new emission stan",
        info:"Global shipping industry adapts to new emission standards Global shipping industry adapts to new emission standards"
    },
    {
        id:"2",
        imagepath:images.news2,
        title:"SHIPPING, security",
        subtitle:"Coast guard posts update on medical certificates",
        info:"Global shipping industry adapts to new emission standards Global shipping industry adapts to new emission standards"
    },
]