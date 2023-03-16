import React from "react";
import './Shop.css';
import { firestore, getDocs } from '../../../firebase.js';
import {firebase} from "firebase/compat/app"
import { useState, useEffect } from 'react';



function Shop() {
    
    // const db = firebase.firestore();
    // db.collection('product').get().then((docs)=>{
    //     docs.forEach((doc)=>{
    //         console.log(doc.data())
    //         var 탬플릿 = `
            // <div class="Shop_product">
            //     <div class="Shop_thumbnail">
            //         <img src="image/${doc.data().title}.jpg" alt="이미지" />
            //     </div>
            //     <div class="Shop_inside">
            //         <h5 class="Shop_inside_title">${doc.data().title}</h5>
            //         <p class="Shop_inside_value">${doc.data().value}</p>
            //     </div>
            // </div>`;
    //         $('.Shop_container').append(탬플릿);
    //     })
    // }, [])
    const [data, setData] = useState(null);

    useEffect(() => {
        const url = '/v1/accounts:signInWithCustomToken?key=AIzaSyCfUs7cy7JTfEN8Gr6jHTw0yKQT4670RLY';
        fetch(url)
          .then(response => response.json())
          .then(data => setData(data));
      }, []);
    
    return (
        <div className="Shop_main">
            <div className="Shop_search">
                <input type="text" placeholder="검색" />         
            </div>
            <div className="Shop_container">
                {/* {data.map((data) => {
                    return (
                        <div class="Shop_product">
                            <div class="Shop_thumbnail">
                                <img src="image/${doc.data().title}.jpg" alt="이미지" />
                            </div>
                            <div class="Shop_inside">
                                <h5 class="Shop_inside_title">${data.title}</h5>
                                <p class="Shop_inside_value">${data.value}</p>
                            </div>
                        </div>
                    )
                })} */}
            </div>
        </div>
    )

}

export default Shop