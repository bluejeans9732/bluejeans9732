import React from "react";
import './Shop.css';
import { firestore } from '../../../firebase.js';
import { useEffect } from 'react';
import firebase from "firebase/compat/app"
import $ from 'jquery';
import { useState } from 'react';



function Shop() {
    
    // const db = firebase.firestore();
    // db.collection('product').get().then((docs)=>{
    //     docs.forEach((doc)=>{
    //         console.log(doc.data())
    //         var 탬플릿 = `
    //         <div class="Shop_product">
    //             <div class="Shop_thumbnail">
    //                 <img src="image/${doc.data().title}.jpg" alt="이미지" />
    //             </div>
    //             <div class="Shop_inside">
    //                 <h5 class="Shop_inside_title">${doc.data().title}</h5>
    //                 <p class="Shop_inside_value">${doc.data().value}</p>
    //             </div>
    //         </div>`;
    //         $('.Shop_container').append(탬플릿);
    //     })
    // }, [])


    // useEffect(() => {
    //     const product = firestore.collection("product");
    
        
    //     product.get().then((docs) => {
          
    //       docs.forEach((doc) => {
    //        // document의 데이터
    //        console.log(doc.data());
    //        // document의 id
    //        console.log(doc.id);
        //    var 탬플릿 = `
        //      <div class="Shop_product">
        //          <div class="Shop_thumbnail">
        //              <img src="image/${doc.data().title}.jpg" alt="이미지" />
        //          </div>
        //          <div class="Shop_inside">
        //              <h5 class="Shop_inside_title">${doc.data().title}</h5>
        //              <p class="Shop_inside_value">${doc.data().value}</p>
        //          </div>
        //      </div>`;
        //      $('.Shop_container').append(탬플릿);
    //       });
    //     });
    // },[]);

    const db = firebase.firestore();
    db.collection('product')
    .get( )
    .then( (result) => {
        result.forEach( (allDoc) => {
            console.log(allDoc.data());
            var 탬플릿 = `
            <div class="Shop_product">
                <div class="Shop_thumbnail">
                    <img src="image/${allDoc.data().title}.jpg" alt="이미지" />
                </div>
                <div class="Shop_inside">
                    <h5 class="Shop_inside_title">${allDoc.data().title}</h5>
                    <p class="Shop_inside_value">${allDoc.data().value}</p>
                </div>
            </div>`;
            $('.Shop_container').append(탬플릿);
        });
    });

    
    
    return (
        <div className="Shop_main">
            <div className="Shop_search">
                <input type="text" placeholder="검색" />         
            </div>
            <div className="Shop_container">
                {/* <div className="Shop_product">
                    <div className="Shop_thumbnail">
                        <img src="image/logo.png" alt="이미지" />
                    </div>
                    <div className="Shop_inside">
                        <h5 className="Shop_inside_title">모드나인</h5>
                        <p className="Shop_inside_value">가격</p>
                    </div>
                </div> */}
                
            </div>
        </div>
    )
}

export default Shop;