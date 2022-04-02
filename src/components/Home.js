import React, { Fragment, useState, useEffect } from "react";
import "./CSS/Home.css";


const Home = () => {
    useEffect(() => {
        document.title = "潘仔的玩车碎碎念"
    }, []);

  return (
    <Fragment>

        <div className = "main-header">
            <h1>潘仔的玩⻋碎碎念</h1>
            <hr></hr>
        </div>

        <div className="refit-content">
            <div id = "wearing-part-wrapper" className = "wearing-part-wrapper">
                <div className = "wearing-click" onClick = {showWearingPart}>
                    <h2 id= "wearing-part-title">
                        损耗件 ▾
                    </h2>
                </div>

                <div id = "wearing-part-content" className = "wearing-part-content">
                    <ul>
                        <li>机油：xxx</li>
                        <li>后差变速器：xxx</li>
                        <li>Sample</li>
                        <li>
                            <a href="https://www.zhihu.com/question/39516948/answer/224295714?utm_source=wechat_session&utm_medium=social&utm_oi=58000089808896&utm_content=group3_Answer&utm_campaign=shareopn" target="_blank">
                            Sample Link</a>
                        </li>
                    </ul>

                </div>

            </div>



            <div id = "modified-part-wrapper" className = "modified-part-wrapper">
                <div className = "modified-click" onClick = {showModifiedPart}>
                <h2 id= "modified-part-title">
                        改装件 ▾
                    </h2>
                </div>

                <div id = "modified-part-content" className = "modified-part-content">
                    <ul>
                        <li>轮毂：xxx</li>
                        <li>底盘：xxx</li>
                        <li>Sample</li>
                        <li>
                            <a href="https://www.zhihu.com/question/39516948/answer/224295714?utm_source=wechat_session&utm_medium=social&utm_oi=58000089808896&utm_content=group3_Answer&utm_campaign=shareopn" target="_blank">
                            Sample Link</a>
                        </li>
                    </ul>

                </div>

            </div>
        </div>

        <div id = "talbe-wrapper" className = "talbe-wrapper">

            <div className = "table-content-click" onClick = {showTableContent}>
                <h2 id= "table-title">
                    表格 ▾
                </h2>
            </div>

            <div id = "table-content" className = "table-content">

                <div className = "table-choice">
                    <div id = "table1-click" className = "table-click table1-click " onClick = {showTable1}>
                        <h3>点击显示table 1</h3>
                    </div>


                    <div id = "table2-click" className = "table-click table2-click " onClick = {showTable2}>
                        <h3>点击显示table 2</h3>
                    </div>


                </div>

                <div id = "table1" className = "table1">
                    <table>
                        <thead>
                            <tr>
                                <th>Table1 第一列 Title</th>

                                <th>Table1 第二列 Title</th>

                                <th>Table1 第三列 Title</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Table1 第一行 第一列</td>

                                <td>Table1 第一行 第二列</td>

                                <td>Table1 第一行 第三列</td>
                            </tr>

                        </tbody>

                        <tbody>
                            <tr>
                                <td>Table1 第二行 第一列</td>

                                <td>Table1 第二行 第二列</td>

                                <td>Table1 第二行 第三列</td>
                            </tr>

                        </tbody>
                    </table>
                </div>

                <div id = "table2" className = "table2">

                    <table>
                        <thead>
                            <tr>
                                <th>Table2 第一列 Title</th>

                                <th>Table2 第二列 Title</th>

                                <th>Table2 第三列 Title</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Table2 第一行 第一列</td>

                                <td>Table2 第一行 第二列</td>

                                <td>Table2 第一行 第三列</td>
                            </tr>

                        </tbody>

                    </table>

                </div>
            </div>
        </div>

    </Fragment>


  );
};

function showTable1(){
    var table1 = document.getElementById("table1");
    var table2 = document.getElementById("table2");
    var table1Click = document.getElementById("table1-click");
    var table2Click = document.getElementById("table2-click");

    table1.style.display = "block";
    table2.style.display = "none";

    table1Click.style.backgroundColor = "white";
    table1Click.style.boxShadow = "5px 10px #888888";

    table2Click.style.backgroundColor = "rgb(180,180,180)";
    table2Click.style.boxShadow = "none";
}


function showTable2(){
    var table1 = document.getElementById("table1");
    var table2 = document.getElementById("table2");
    var table1Click = document.getElementById("table1-click");
    var table2Click = document.getElementById("table2-click");

    table1.style.display = "none";
    table2.style.display = "block";
    table1Click.style.backgroundColor = "rgb(180,180,180)";
    table1Click.style.boxShadow = "none";

    table2Click.style.backgroundColor = "white";
    table2Click.style.boxShadow = "5px 10px #888888";

}

function showWearingPart(){
    var currDiv = document.getElementById("wearing-part-content");
    var currTitle = document.getElementById("wearing-part-title");
    if(currDiv.style.display === "block"){
        currDiv.style.display = "none";
        currTitle.innerHTML = "损耗件 ▾";
    }else{
        currDiv.style.display = 'block';
        currTitle.innerHTML = "损耗件 ▴";
    }
}

function showModifiedPart(){
    var currDiv = document.getElementById("modified-part-content");
    var currTitle = document.getElementById("modified-part-title");
    if(currDiv.style.display === "block"){
        currDiv.style.display = "none";
        currTitle.innerHTML = "改装件 ▾";
    }else{
        currDiv.style.display = 'block';
        currTitle.innerHTML = "改装件 ▴";
    }
}

function showTableContent(){
    var currDiv = document.getElementById("table-content");
    var currTitle = document.getElementById("table-title");
    if(currDiv.style.display === "block"){
        currDiv.style.display = "none";
        currTitle.innerHTML = "表格 ▾";
    }else{
        currDiv.style.display = 'block';
        currTitle.innerHTML = "表格 ▴";
    }
}

export default Home;