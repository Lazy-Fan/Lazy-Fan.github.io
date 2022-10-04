import React, { Fragment, useState, useEffect } from "react";
import "./CSS/Home.css";
import PullDownMenu from "./PullDownMenu.js";
import {useParams} from "react-router-dom";


const Home = () => {
    useEffect(() => {
        document.title = "懒仔番"
        var n = localStorage.getItem('on_load_counter');

        if (n === null) {
            n = 0;
        }
        n++;
        localStorage.setItem("on_load_counter", n);
    }, []);

    
    

  return (
    <Fragment>
        {console.log(localStorage.getItem('on_load_counter'))}
        <div className = "main-header">
            <div className = "title-box" onClick = {showAdv}>
                <h1>懒仔番</h1> 
            </div>
           
            
        </div>

        <div className = "title-button-wrapper">
            
            <div className = "title-button-left">
                <div className = "project-button title-button" onClick = {showWearingPart}>
                    <h4>损耗件</h4>
                </div>


                <div className = "project-button title-button" onClick = {showModifiedPart}>
                    <h4>改装件</h4>
                </div>

            </div>

            <div className = "title-button-right" onClick = {showProjectOne}>

                <div className = "project-button">
                    <h5>Project F82M4 StreetGT</h5>
                </div>

            </div>
            
        </div>
        
        <div className = "main-display">
            <div id = "adv-content" className = "adv-content">

                <div className = "intro">
                    <h2>食用指南</h2>
                    <p>&emsp;&emsp;相信你来到这里一定是为了更了解你的那台下赛道民用车，那么就请花时间耐心看完所有干货。
                    </p>

                    <div className = "intro">
                    <h2>广告位招租</h2>
                    </div>
                </div>

            </div>


            <div id = "wearing-part-wrapper" className = "wearing-part-wrapper">
                {/* <div className = "wearing-click" onClick = {showWearingPart}>
                    <h2 id= "wearing-part-title">
                        损耗件 ▾
                    </h2>
                </div> */}

                <div id = "wearing-part-content" className = "wearing-part-content">

                    <h2>以下都是参加赛道日前必须检查以及经常更换的项目!!!</h2>


                    <div className = "wearing-click">
                        <h2 id= "wearing-part-title">
                            损耗件
                        </h2>
                    </div>
                    <PullDownMenu
                        upTriangleString = {"机油 ▴"}
                        downTriangleString = {"机油 ▾"}
                        content1 = {"\t机油是最常规的保养，对于机油知识不理解的建议恶补以下视频:\n"}
                        link1 = {"\thttps://www.bilibili.com/video/BV1PA411v7V7?share_source=copy_web"}
                        content2 ={"\n\n\t第一次下赛道之前强烈建议更换机油机滤。机滤没有太多讲究使用原厂的，机油按照地区的温度使用对应标号的，高温黏度可以选择比原厂更高一点的去适应激烈驾驶的工况。建议两或者三个赛道日后需要进行更换，最佳情况建议每次赛道日前更换。 "}
                        currContentId = {"jiyou-div"}
                        currTitleId = {"jiyou-title"}
                    />


                    <PullDownMenu
                        upTriangleString = {"后差速器油和变速油箱 ▴"}
                        downTriangleString = {"后差速器油和变速油箱 ▾"}
                        content1 = {"\t新车可以不更换，收二手车整备时最好进行一次更换。"}
                        currContentId = {"houchasuqiyou-div"}
                        currTitleId = {"houchasuqiyou-title"}
                    />


                    {/* <PullDownMenu
                        upTriangleString = {"变速箱油 ▴"}
                        downTriangleString = {"变速箱油 ▾"}
                        content1 = {"按常规保养，个人认为可以在一两年的赛道日之后进行一次更换。"}
                        currContentId = {"biansuxiangyou-div"}
                        currTitleId = {"biansuxiangyou-title"}
                    /> */}

                    {/* 轮胎在这 */}
                    <div className = "inside-pull-down">
                        <div className = "inside-pull-down-title" onClick = {showTirePullDown}>
                            <h3 id= "luntai-title">
                                轮胎 ▾
                            </h3>
                        </div>

                        <div id = "luntai-div" className = "inside-pull-down-content">

                            <p>
                            &emsp;&emsp;&emsp;重点，轮胎非常重要！！！轮胎非常重要！！！轮胎非常重要！！！重要的事情说三遍
                            </p>

                            <p>
                            &emsp;&emsp;&emsp;轮胎作为车辆与地面唯一接触的表面，一是和轮毂一起为车辆提供了抓地力，二是为轮毂以及避震提供了一定的缓冲。轮胎的配方和尺寸直接影响着轮胎的抓地力，相同尺寸更加粘的轮胎对于圈速的提升是非常明显且直接的，pss和cup2在一条两分钟左右的赛道圈速可以差大约5秒。先讲解下轮胎尺寸，拿275/35/R18来距离，275代表了胎宽为275mm, 35代表了胎壁的厚度是第一个数值275的35%，而R18代表了这个轮胎适配18寸的轮毂。
                            </p>

                            <p>
                            &emsp;&emsp;&emsp;接下来就是轮胎的种类了，除了平时会听到的冬季胎，四季胎，夏季胎之外，赛道上大家会讨论的更多是分类成街胎，半R胎，R胎和光头胎。刚开始参加赛道日的小白们很有可能用的就是平时代步用的原厂胎，大部分情况下都是街胎。而最顶级的街胎就是米胖子PS4S了，再往上 的Cup2其实是半热熔。接下来就具体区分半R,半热熔和光头胎。国内用中文一般只对轮胎区分成街胎、半热熔和光头胎，但是英文里却会发现还用另外一种比街胎更抓地但是没有半热熔那么抓地的轮胎。半R胎用英文就非常好理解叫做Extreme Performance Summer tire, 而半热熔轮胎却叫做R compound tire/Semi-slick tire，光头胎英文就是slick tire了。这三种轮胎的区分主要以TreadWear磨耗值200TW和100TW为界，数值越低轮胎就越不耐磨。
                            </p>

                            <p>
                            &emsp;&emsp;&emsp;从半R轮胎开始这些轮胎目的是在干地发挥最大的抓地力，那么相比于日常使用的街胎来说，排水能力差，雨天的抓地力会比街胎差很多，所以下雨天赛道和街上都是街胎更好用。更好的轮胎虽然有更强的抓地力，但对悬挂的要求也就更高。911级别以下的车原厂悬挂都没有能力去配合光头胎甚至是完全发挥半热熔轮胎的抓地性能，因此没有更换绞牙避震的情况下更换一套半R胎练习是最好的，半热熔的话只能选择Cup 2。半R胎和Cup2还可以用于部分走街和开到赛道，更好的轮胎就几乎不能代步了，最好是到赛道再换上。
                            </p>

                            <p>
                            &emsp;&emsp;&emsp;最后提一下轮胎的损耗，不同于街胎，半热熔轮胎都是用heat cycle进行计算的，heat cycle指轮胎达到一个稳定的工作温度之后一段时间又冷却下来。赛道日基本以一节15分钟为计算是一个heat cycle，那么轮胎大致可以使用30个heat cycle，以赛道日来计算的话约等于6个赛道日吧，不过具体情况还是要看驾驶的激烈程度以及轮胎花纹的磨损。以Cup2为例，假如还日常行驶的话大概率在heat cycle用完之前就磨完了胎纹，大致使用是1w mile道路驾驶以及6次赛道日。以下是我搜集的部分半R，半热熔和光头胎的资料，在这里就给大家做一个参考。
                            </p>

                            <div id = "talbe-wrapper" className = "talbe-wrapper">

                                {/* <div className = "table-content-click" onClick = {showTableContent}>
                                    <h2 id= "table-title">
                                        表格 ▾
                                    </h2>
                                </div> */}

                                <div id = "table-content" className = "table-content">

                                    <div className = "table-choice">
                                        <div id = "table1-click" className = "table-click table1-click " onClick = {showTable1}>
                                            <h3>半R胎</h3>
                                            <h5>(Extreme Performance) </h5>
                                        </div>


                                        <div id = "table2-click" className = "table-click table2-click " onClick = {showTable2}>
                                            <h3>R胎</h3>
                                            <h5> (R Compound) </h5>
                                        </div>


                                        <div id = "table3-click" className = "table-click table3-click " onClick = {showTable3}>
                                            <h3>半光头</h3>
                                            <h5> (Semi-Slick) </h5>
                                        </div>


                                    </div>

                                    <div id = "table1" className = "table table1">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>轮胎种类</th>

                                                    <th>耐磨指数(Tread Wear)</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td>Michelin Pilot Sport Cup 2 Connect</td>

                                                    <td>240</td>

                                                </tr>

                                            </tbody>

                                            <tbody>
                                                <tr>
                                                    <td>Goodyear Eagle F1 Supercar 3</td>

                                                    <td>220</td>
                                                </tr>

                                            </tbody>

                                            <tbody>
                                                <tr>
                                                    <td>Yokohama A052</td>

                                                    <td>200</td>
                                                </tr>

                                            </tbody>

                                            <tbody>
                                                <tr>
                                                    <td>Yokohama Advan Neova AD08 R</td>

                                                    <td>200</td>
                                                </tr>

                                            </tbody>


                                            <tbody>
                                                <tr>
                                                    <td>Falken Azenis RT660</td>

                                                    <td>200</td>
                                                </tr>

                                            </tbody>

                                            <tbody>
                                                <tr>
                                                    <td>Bridgestone Potenza RE-71RS</td>

                                                    <td>200</td>
                                                </tr>

                                            </tbody>
                                            
                                            
                                            <tbody>
                                                <tr>
                                                    <td>Nankang CR-1</td>

                                                    <td>200</td>
                                                </tr>

                                            </tbody>

                                        </table>
                                    </div>

                                    <div id = "table2" className = "table table2">

                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>轮胎种类</th>

                                                    <th>耐磨指数(Tread Wear)</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td>Michelin Pilot Sport Cup 2</td>

                                                    <td>180</td>
                                                </tr>

                                            </tbody>

                                            <tbody>
                                                <tr>
                                                    <td>Nankang AR1</td>

                                                    <td>100</td>
                                                </tr>

                                            </tbody>

                                            <tbody>
                                                <tr>
                                                    <td>Goodyear Eagle F1 Supercar 3R</td>

                                                    <td>100</td>
                                                </tr>

                                            </tbody>

                                            <tbody>
                                                <tr>
                                                    <td>Nitto NT01</td>

                                                    <td>100</td>
                                                </tr>

                                            </tbody>

                                            <tbody>
                                                <tr>
                                                    <td>Maxxis RC-1</td>

                                                    <td>100</td>
                                                </tr>

                                            </tbody>

                                            <tbody>
                                                <tr>
                                                    <td>Hankook Ventus TD</td>

                                                    <td>80</td>
                                                </tr>

                                            </tbody>

                                            <tbody>
                                                <tr>
                                                    <td>Pirelli P Zero TrofeoR</td>

                                                    <td>60</td>
                                                </tr>

                                            </tbody>

                                        </table>

                                    </div>


                                    <div id = "table3" className = "table table3">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>轮胎种类</th>

                                                    <th>耐磨指数(Tread Wear)</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td>Hoosier R7</td>

                                                    <td>40</td>
                                                </tr>

                                            </tbody>


                                        </table>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>

                    <div className = "inside-pull-down">
                        <div className = "inside-pull-down-title" onClick = {showBreakPullDown}>
                            <h3 id= "shache-title">
                                刹车 ▾
                            </h3>
                        </div>

                        <div id = "shache-div" className = "inside-pull-down-content">
                            <a href="#kaqian-title" onClick = {showKaqian}>*卡钳详见改装</a>
                            <p>基础概念可以看:  <a href="https://www.bilibili.com/video/BV1zf4y1R7ji?share_source=copy_web">https://www.bilibili.com/video/BV1zf4y1R7ji?share_source=copy_web</a>
                            </p>
                            
                            <PullDownMenu
                                upTriangleString = {"刹车油 ▴"}
                                downTriangleString = {"刹车油 ▾"}
                                content1 = {"\t把钢喉和刹车油放一起说，刹车油是必须升级选项。原厂使用的刹车油一般多是DOT3级别的，根本没有办法在承受赛道激烈驾驶之后的热量很容易过沸，需要至少升级到DOT4。同时可以把原厂的橡胶钢喉换成金属的，会减少热量传递之后刹车管的膨胀从而很好的保持刹车脚感。在更换了钢喉的情况下甚至可以使用DOT5.1级别的刹车油，但是DOT5.1赛油非常贵，下赛道的性价比低，还是更多使用DOT4的油比较好。推荐Motul rbf660，Castrol srf racing和Endless rf-650"}
                                currContentId = {"shacheyou-div"}
                                currTitleId = {"shacheyou-title"}
                            />

                            <PullDownMenu
                                upTriangleString = {"刹车皮 ▴"}
                                downTriangleString = {"刹车皮 ▾"}
                                content1 = {"\t整个刹车部件中最最重要的部分，原厂的刹车皮几乎是不可能承受住一节15分钟的连续激烈驾驶。假如在对刹车要求高的赛道上，特别是大直道尾的一脚重刹，可能在第三圈的时候就会闻到一股焦糊味。赛道使用的刹车皮推荐工作温度区间能够在100摄氏度到600摄氏度之间，可以保证在赛道上一节的时间不会有刹车衰减的情况。更换完刹车油之后配上好的刹车皮可以令制动效果达到稳定的水平，当然也要配合上相应的轮胎，更好的制动效果配上抓地力不够的轮胎只会造成abs提早介入而发挥不出轮胎的抓地力。\n\n\t很多人买刹车皮时会看到摩擦系数，但是对这个指标不是特别了解的可以参考"}
                                link1 = {"https://zhuanlan.zhihu.com/p/467681076"}
                                content2={"的回答。1.6吨以上的大马力性能车使用0.45系数的皮是不够用的，建议使用更高摩擦系数的。\n\n\t最后很多人应该没有关心过brake bias，指的是一台车的刹车前后分配比例，民用车上这个是不可调的，但是赛车上可以。不同车型的前后分配比例是不同的，而且由于车重比例的分配，导致刹车前后力度一定是不平均的，因此前后有时候可以适配不同摩擦系数的刹车皮。前刹推荐赛用刹车皮Paige rs29, Pfc11和Ferodo ds1.11，日本车比较轻可以选择使用Endless MX72及以上，后刹可以用第一个级别的对应刹车皮。"}
                                currContentId = {"shachepi-div"}
                                currTitleId = {"shachepi-title"}
                            />


                            <PullDownMenu
                                upTriangleString = {"刹车盘 ▴"}
                                downTriangleString = {"刹车盘 ▾"}
                                content1 = {"\t碳陶瓷盘在赛道上高温情况下会直接气化，消耗特别快，当然刹车力度永远保持一致，但是一套一万多美金，除了贵没有任何缺点。民用赛道日基本都是选择钢盘，升级的话只推荐选择划线盘，因为打孔盘的孔可能在激烈工况下裂开，那么这个盘就不能用了，在赛道上裂开的话甚至可能会造成极大危险。划线盘中更好的选择是分体式浮动盘，可以很好的解决散热提供更稳定的摩擦力。强力推荐性价比极高的girodisc，Ap J hook和pfc v3假如适用的话可以选择但是价格会更高一些。"}
                                currContentId = {"shachepan-div"}
                                currTitleId = {"shachepan-title"}
                            />
                        </div>
                    </div>

                </div>

            </div>



            <div id = "modified-part-wrapper" className = "modified-part-wrapper">
                {/* <div className = "modified-click" onClick = {showModifiedPart}>
                    <h2 id= "modified-part-title">
                        改装件 ▾
                    </h2>
                </div> */}

                <div id = "modified-part-content" className = "modified-part-content">

                    <div className = "modified-click">
                        <h2 id= "modified-part-title">
                            改装件
                        </h2>

                        <h3 id="modified-part-intro">
                            &emsp;&emsp;&emsp;重中之重，改装件与消耗品不同之处在于改装对车辆整体是可能会有负面影响而消耗品对车辆来说永远是收益。因此改装之前，一定要构思大致方案，以下默认用户的目的是半街半赛一直到纯赛化改装。这里也是按类别来讨论不同部件，建议吞下全部干货再结合自身情况来制定属于自己的改装方案，原厂车其实非常均衡，盲目改装反而会花了钱还得不到自己想要的结果。一开始不知道自己想要什么就不要改装，而且不要紧，读完这部分后你一定会开始明白自己想要什么！
                        </h3>
                    </div>

                    <PullDownMenu
                        upTriangleString = {"轮毂 ▴"}
                        downTriangleString = {"轮毂 ▾"}
                        content1 = {"\t这个视频对轮毂轮胎数据有一些基础的讲解:\n"}
                        link1 = {"\t\thttps://www.bilibili.com/video/BV18k4y127VG?share_source=copy_web"}
                        content2 = {"\n\t看完视频后相信大家有了一定的知识积累了，那么我们接下来要开始正文干货分析了。\n\n\t首先是轮毂制造工艺，分为三种，铸造，锻造和旋压铸造。铸造(Cast)是把液态铝倒入模具之后冷却形成的，成本比较低但是成型后的铝合金轮毂会有比较多的微小气泡，所以赛道激烈驾驶会比较容易变形。旋压铸造(Flow-formed)是比较新的一种制造工艺，是铸造过程中在液体冷却之前用更大的压力让轮毂成型，比较轻同时又可以有更强的抗形变能力。最后锻造就是一整块铝合金用CNC工艺压制成型，没有熔化过程，一体成型，因此强度非常高，即使赛道上长时间使用也几乎不会有任何问题。那么赛道驾驶的话至少也要选用旋压铸造的，最好直接选用锻造轮毂。\n\n\t确定好下赛道使用旋压铸造和锻造轮毂之后就要确定轮毂大小了，这也是为什么轮胎篇没有推荐轮胎尺寸的原因，因为轮胎尺寸是由轮毂大小决定的，但同时要明确自己大致要使用什么品牌的轮胎，有没有自己要的尺寸，反之去找合适大小的轮毂。\n\n\t确定好使用轮胎的宽度就可以确认轮毂的J值。原厂轮毂的数值一般都比较保守，不更换轮毂的情况下基本上只能把轮胎宽度+10就是极限了，而一般更换轮毂就是为了可以用更宽的轮胎，对，我也是轮胎车神教的一员。\n\n\t一般来说下赛道选用的轮毂尺寸在15到19寸之间比较好，之后要换六活塞大卡钳的话轮毂选择的时候一定要考虑好能不能装得下，那么轮胎的花费就会稍微大一些而且轮胎的选择也会变少。因此出于预算以及赛道表现考虑，选用的轮毂和轮胎应该是轮胎选择品牌较多以及能容纳下卡钳的更宽但是直径更小的轮毂。\n\n\t确定好轮毂直径和大致轮胎宽度之后就可以去研究轮毂宽度以及偏距(Offset)了。可以通过查阅你使用的车道型大家下赛常用的前后轮胎宽度配置去大致定下来一个轮毂宽度。一个确定的轮胎宽度可以有三到四个轮毂宽度选择，那么这时候就要去看轮毂的偏距了，一般这个叫做ET值，指的是轮圈侧面的中心线与轮轴(Hub)之间的距离，单位为mm（ET40 即是 40mm 的意思）。ET 值越大，轮圈就会越缩进轮拱；相反的，越小的 ET 值轮圈就会越加超出轮拱。更加形象一点就是ET值从很大的正值一直到负值的变化过程中，那些轮毂辐条就会从轮子里凹陷逐渐变成向外凸。那么怎么大致计算需要多少ET值呢，首先找到原厂轮毂数据，然后每增加0.5英寸的轮毂宽度，ET值就要减小5~6mm。但这个数值不是绝对的，因为你会发现网上能找到的轮毂ET值都没有变小这么多。那是因为原厂轮毂一般留了很多的空间而改装轮毂会尽量用满，这个时候就要去考虑能买到的改装轮毂到底能不能装得下了。\n\n\t考虑适配问题的时候有这么几个方面，装上轮胎后的轮毂，会不会碰到刹车卡钳，翼子板或者避震桶以及弹簧。这个问题就变得越来越复杂了，没有一个很简单的答案告诉大家。那么该怎么办呢，最省心的方案是用没有那么激进的轮毂数据或者定制轮毂数据解决问题。假如这两个都不可以，一定要使用比较激进的大厂轮毂情况下，可以使用垫片去保证刹车卡钳以及避震的空间，而翼子板擦碰的话可以四轮定位用更多的负camber以及对翼子板进行一定的改装，宽体就由此诞生了。\n\n\t最后说下该买什么品牌的轮毂，有钱就BBS，OZ，forgeline准没错，预算低一些的话玩宝马APEX是永远的神。                        "}
                        currContentId = {"lungu-div"}
                        currTitleId = {"lungu-title"}
                    />


                    <PullDownMenu
                        upTriangleString = {"卡钳 ▴"}
                        downTriangleString = {"卡钳 ▾"}
                        content1 = {"\t卡钳实在是令人头疼，原因在于看到网上改装案例一上来就是Brembo和Endless。我相信很多客户在换这些卡钳之前，大多数都没有考虑过车需不需要这套卡钳，同时也没研究过自己的总泵能不能带动那么多活塞。连刹车皮，盘和油都没有单独升级过就直接换前后一整套卡钳，虽说是全部升级了，而且总泵力度足够的情况下，需要这么奢侈吗？（土豪请随意当我没说）\n\n\t那既然聊到改装了升级一定是直接使用赛用卡钳，而不是那种半街半赛尴尬定位的，还不如使用原厂卡钳。改装卡钳一般前后都是单独卖单独换。常见选择是前六活塞后四活塞，赛用卡钳会偷轻很多，同时没有活塞的橡胶垫，因此活塞上的刹车尘需要定期清理。原厂卡钳有橡胶垫，卡钳相比赛用会重比较多而且为了应付日常使用各种的路况以及天气会有很多设计限制，而且原厂卡钳漆面颜色在赛道使用情况下会变色。活塞接触面积变大后需要总泵的力度足够，不然分配到每个活塞的力会小，在刹车盘和皮相应加大的情况下，刹车脚感反而会变软然后刹车力度甚至会比改装前小。因此在购买的时候一定要确认改装的卡钳是支持原厂刹车总泵的而且不会更早触发abs。\n\n\t如何确定自己需要升级改装卡钳呢，有以下这么几个点可以考虑。已经升级完轮胎轮毂；车的马力比较大；赛道上其他各部件都没有过热情况发生；原厂卡钳使用升级过赛用皮和盘之后，仍旧发现自己刹车会过热、制动距离不够，或者是不能够满足一整天赛道日使用需用，同时每年会至少跑六次赛道日以上，那么刹车卡钳升级就可以放上清单啦。我个人还是推崇AP的卡钳，赛道常客基本都会选择AP的而且很多赛事使用的也是AP卡钳。据我所知AP的卡钳在北美是可以寄回去花费大概单个卡钳185美元就可以帮客户进行清洁以及重造修复保证卡钳的耐用性非常的方便，也不需要担心活塞没有橡胶垫需要清理的问题。"}
                        currContentId = {"kaqian-div"}
                        currTitleId = {"kaqian-title"}
                    />


                    <PullDownMenu
                        upTriangleString = {"底盘 ▴"}
                        downTriangleString = {"底盘 ▾"}
                        // content1 = {"\t不同车型基础悬挂知识可以参考: "}
                        // link1 = {"https://www.bilibili.com/video/BV1YZ4y1u7rb?share_source=copy_web"}
                        //currContentId = {"dipan-div"}
                        currTitleId = {"dipan-title"}
                    />

                </div>

            </div>
                
            <div id = "projects-content" className = "projects-content">

                <div id="project-1" className = "project-1">
                    <h3 id = "project1-title">
                        Project F82M4 StreetGT
                    </h3>

                    <p>
                        &emsp;&emsp;从小就跟着父亲看F1让我对赛车有了一定的基础了解，但是方程式对我来说太过于遥远，后来又忙于学业后逐渐远离了赛车。但18岁那年考驾照我学得特别轻松，觉得自己对车还是有一点天赋的，从那时候就爱上了开车。而真正了解不同品牌的车还是要到17年的时候，在外留学而且大二住得离学校有点远之后就打算买车了。那时候我就很想拥有一台F82，但还在村子里读本科，家里也不让年纪比较小的我玩车，只好妥协买了一台435代步，偶尔跑跑山，而且因为经常要进城改善伙食，高速上会比较快，培养了一些车感。等到毕业换车的时候，其实很纠结到底还要不要换一台M4，毕竟以为开着差不多底盘的车子三年，觉得不会有太大提升，可是思来想去觉得还是想拥有，恰逢疫情慢慢找车到20年末的时候才终于收到了一台心仪的F82。曾是键盘侠的我以为对F82了如指掌，可开车上路短短几天就觉得整个底盘还是有很大差异的，庆幸自己终究做了正确的选择。但是之前一直没跑过赛道的我对赛化改装还没有那么多的理解。看了很多台车，厌倦了很多塑胶内饰的4系想要全皮内饰的我最后就收了一台18年带zcp套件的F82，几乎选配满了，如今才发觉多了我不需要的各种辅助驾驶而且还带了电调悬挂。就是这个原厂电调悬挂让我一度放弃了要换绞牙避震的念头，不然我一定会找一台没有电调的，但又要全皮的车就更加少了。也怪不得我这种要求这么多的人会想以后买911，能自己选配实在是太好了。思来想去，我对这台车的定位会是一台训练赛车，暂时在原厂动力和悬挂的情况下进行一些赛化改装去提升赛道上的稳定性保证我可以不断磨练圈速和技巧，也让自己更加了解车的不同部件调教会对车产生什么影响。我也算是一个赛道中的新手菜鸟吧，但能跑出来的圈速尚可，希望这台车和我能够共同进步。我想让她最终成为一台StreetGT4，因为做不到原厂M4 GT4轻量化的程度，所以最后会把动力刷到500匹以上去追求与原厂GT4差不多的推重比，也可以视作另类的Balence of Performance了吧。
                    </p>

                    <ul className = "project1-list1">
                        <h3>改装清单（持续更新中）：</h3>
                        <p>清单包含已改装清单和未来可能升级项目（带星号部分），会不定时更新，假如有车友们的支持（一键三连）那改装项目就会尽快更新啦。</p>
                        <li>轮毂：BBS CHR 19’ 9J ET20/10.5J ET25 
                            <br></br> &emsp;&emsp;&emsp;*Apex EC7R 18x10 ET25
                            <br></br> &emsp;&emsp;&emsp;78mm MotorsportHardware Wheel stud kit 14*1.25</li>
                        <li>轮胎：*Falken RT660 275/35/18</li>
                        <li>底盘：Swift Spec-R + Millway camber plate
                            <br></br> &emsp;&emsp;&emsp;*Dinan Lightweight tubular anti-roll bar (rear end link included)
                            <br></br> &emsp;&emsp;&emsp;*Millway thrust arm bushing
                            <br></br> &emsp;&emsp;&emsp;*Spl rear toe arm
                            <br></br> &emsp;&emsp;&emsp;*Front end link
                            <br></br> &emsp;&emsp;&emsp;*MCS 2 way Non Remote
                            <br></br> &emsp;&emsp;&emsp;*Rear Camber arms
                            <br></br> &emsp;&emsp;&emsp;*Bump steer adjustable tie rod ends
                            <br></br> &emsp;&emsp;&emsp;*Rear traction arms
                        </li>
                        <li>空力：*Apr front splitter
                            <br></br> &emsp;&emsp;&emsp;M performance diffuser + AeroflowDynamics rear diffuser
                            <br></br> &emsp;&emsp;&emsp;M performance lip + *Apr gtc300</li>
                        <li>排气：Active Autowerke Single Midpipe + M performance exhaust</li>
                        <li>进气：K&N High Flow Air Filter
                            <br></br> &emsp;&emsp;&emsp;*Vrsf charge pipe</li>
                        <li>透气壶：Mishimoto oil catch can</li>
                        <li>刹车：Front pfc11
                            <br></br> &emsp;&emsp;&emsp;Girodisc two piece rotor
                            <br></br> &emsp;&emsp;&emsp;*Rear pfc08 
                            <br></br> &emsp;&emsp;&emsp;*AP 9668 Front BBk
                        </li>
                        <li>刹车油：Motul rbf660</li>
                        <li>刹车钢喉：Goodridge</li>
                        <li>轻量化电池：*Antigravity</li>
                        <li>内饰：Recaro Pole Position</li>
                    </ul>


                    <br></br>

                    <h2>第一阶段</h2>
                    <div className = "project1-stage1">
                        <div className ="project1-stage1-list-image">

                            <div className = "project1-stage1-list-image-left">
                                <ul className = "project1-list2">
                                    <li>BBS CHR 19’ 9J ET20/10.5J ET25</li>
                                    <li>Michelin PS4S 255&275/35/19</li>
                                    <li>H&R sport spring</li>
                                    <li>M performance diffuser + M performance lip</li>
                                    <li>Active Autowerke Single Midpipe + M performance exhaust</li>
                                    <li>Hawk HPS5.0 pad</li>
                                    <li>K&N High Flow Air Filter</li>
                                    <li>Mishimoto oil catch can</li>
                                </ul>
                            </div>

                            <div className = "project1-stage1-list-image-right">
                                <img src={require('../images/turn8_2021.jpeg')}
                                    alt = "turn8_2021.jpeg" />
                            </div>

                        </div>


                        <p>
                            &emsp;&emsp;我在收到这台车时正巧碰上一位车友要拆件回原厂卖车，我就以一个比较低的价格收下了排气和H&R短簧。中尾段对于性能的提升其实非常的少，中段少了一个催化会降低一些回压，可能提升个10马力吧，但是尾段完全就是对音色的调节了。大家最喜欢用的AK其实并不太适配F8x，我认为M performance的尾段音色其实是最好听的，但大家一般收不到单独的尾段，所以我只能说比较凑巧，另外中段的话AA有single和double midpipe两种，前者更偏向性能一些而后者会让音色更加好听。车友正好用的是我想要的single我就一起拿下了。H&R短簧的话是附赠的我就一起拿了，但是装上车之后反而觉得这套短簧特别的差，平时路上非常颠，高速的时候车身假如弹起之后根本拉不住车身让人感觉飞起来了一样。在赛道上对轮荷转移和侧倾的控制也是非常的差，总体感觉是拉低了车的极限。
                        </p>


                        <p>
                            &emsp;&emsp;改装的同时因为是二手车，所以肯定是要进行一次全方面的保养的。换了hawk HPS5.0的刹车皮，刹车油和钢喉，第一次换的时候没有考虑到之后下赛道会那么激烈的驾驶因此没选择赛皮，现在回想是失策了。然后换了高流量的进气滤芯，机油机滤和空调滤芯都是常规保养，还有就是我换了后差速器油，装了机油透气壶。S55发动机相比上代要耐操很多，可是我为了这一套动力总成能够在之后经常下场的情况下延长寿命去加装了机油透气壶。这个原理就不详细说了，主要是解决缸内直喷进气积碳问题，可以提升发动机的油耗表现和性能。
                        </p>


                        <p>
                            &emsp;&emsp;现在使用的轮毂BBS CHR 19寸前9J ET20后10.5J ET25， 这套轮毂是有一个E92的车友在卖，当时我还是20寸的原厂666M轮毂，觉得跑赛道使用20寸的轮胎太大了而且轮胎会很贵，原厂轮毂的数据也不支持很多轮胎的选择，因此就想找一套比较便宜点但是不错的19寸轮毂。最终我用原厂的轮毂置换了现在的这套轮毂。因为是蓝色的前四后二卡钳，所以我其实不用太担心ET值但其实前轮9J的数据还是稍微小了那么一点。F8x这代的车要1.6吨以上非常重，所以赛道上推头的问题比较严重，255根本不够宽。北美圈子用F80、F82跑赛道的外国车友很多会使用前后一样275甚至295宽的轮胎，可以很大程度解决M4赛道上的推头问题。受限于目前手上的这套轮毂，我也只能尽可能的去用更宽的轮胎来找抓地力。

                        </p>

                        <p>
                        &emsp;&emsp;轮毂自带的石化胎几乎没法开，我本来想定Federal的595rspro，但是朋友那边订不到，于是第一套使用的是255/275的米胖子ps4s，但是下了赛道之后发现ps4s根本抱不住弯心，而且连续推极限会让轮胎很快失去抓地力失控，或者说假如要走好行车线的话要提前特别多刹车点然后弯速会非常慢。F82超过1.6吨的车重对轮胎和刹车的要求比我预想的要高很多。这是我在第二次去buttonwillow赛道日时参加计时圈速赛的官方记录成绩，近乎空油，原厂四轮定位数据+这套普通版抓不住地的ps4s做出了目前的最好成绩。
                        </p>

                    </div>

                    <br></br>
                    <h2>第二阶段</h2>
                    <h2>&emsp;&emsp;敬请期待</h2>
                    <div className = "project1-stage2">

                        {/* <ul className = "project1-list3">
                            <li>78mm MotorsportHardware Wheel stud kit 14*1.25</li>
                            <li>Swift Spec-R + Millway camber plate</li>
                            <li>Falken RT660 265/275</li>
                            <li>Pfc 11 pad</li>
                            <li>Girodisc Front rotor</li>
                            <li>HAeroflowDynamics rear diffuser</li>
                            <li>Dimple M12x1.5x18 Magnetic Engine Oil Drain Plug</li>
                        </ul> */}

                    </div>
                        
                        
                </div>

            </div>

        </div>



    </Fragment>


  );
};

function resetTableButtons(){
    var table1Click = document.getElementById("table1-click");
    var table2Click = document.getElementById("table2-click");
    var table3Click = document.getElementById("table3-click");


    table1Click.style.backgroundColor = "rgb(180,180,180)";
    table1Click.style.boxShadow = "none";

    table2Click.style.backgroundColor = "rgb(180,180,180)";
    table2Click.style.boxShadow = "none";

    table3Click.style.backgroundColor = "rgb(180,180,180)";
    table3Click.style.boxShadow = "none";
}

function resetTableContents(){
    var table1 = document.getElementById("table1");
    var table2 = document.getElementById("table2");
    var table3 = document.getElementById("table3");

    table1.style.display = "none";
    table2.style.display = "none";
    table3.style.display = "none";
}

function showTable1(){
    resetTableButtons();
    resetTableContents();

    var table1 = document.getElementById("table1");

    var table1Click = document.getElementById("table1-click");

    table1.style.display = "block";

    table1Click.style.backgroundColor = "white";
    table1Click.style.boxShadow = "5px 10px #888888";
}


function showTable2(){
    resetTableButtons();
    resetTableContents();

    var table2 = document.getElementById("table2");

    var table2Click = document.getElementById("table2-click");

    table2.style.display = "block";

    table2Click.style.backgroundColor = "white";
    table2Click.style.boxShadow = "5px 10px #888888";
}


function showTable3(){
    resetTableButtons();
    resetTableContents();

    var table3 = document.getElementById("table3");

    var table3Click = document.getElementById("table3-click");

    table3.style.display = "block";

    table3Click.style.backgroundColor = "white";
    table3Click.style.boxShadow = "5px 10px #888888";
}

function showAdv(){
    resetMainDisplay();

    var currDiv = document.getElementById("adv-content");
    currDiv.style.display = 'block';
}


function showWearingPart(){
    resetMainDisplay();
    var currDiv = document.getElementById("wearing-part-content");
    currDiv.style.display = 'block';
}

function showProjectOne(){

    resetMainDisplay();

    var currDiv = document.getElementById("projects-content");
    currDiv.style.display = 'block';
}


function resetMainDisplay(){
    var div0 = document.getElementById("adv-content");
    var div1 = document.getElementById("wearing-part-content");
    var div2 = document.getElementById("modified-part-content");
    var div3 = document.getElementById("projects-content");

    div0.style.display = "none";
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";

}
function showModifiedPart(){
    resetMainDisplay();

    var currDiv = document.getElementById("modified-part-content");
    currDiv.style.display = "block";
    
}

function showLungu(){
    resetMainDisplay();

    var currDiv = document.getElementById("modified-part-content");

    currDiv.style.display = 'block';

    var kaqianDiv = document.getElementById("lungu-div");
    var kaqianTitle = document.getElementById("lungu-title");

    kaqianDiv.style.display = "block";
    kaqianTitle.innerHTML = "轮毂 ▴";
}

function showKaqian(){

    resetMainDisplay();

    var currDiv = document.getElementById("modified-part-content");

    currDiv.style.display = 'block';

    var kaqianDiv = document.getElementById("kaqian-div");
    var kaqianTitle = document.getElementById("kaqian-title");

    kaqianDiv.style.display = "block";
    kaqianTitle.innerHTML = "卡钳 ▴";
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

function showTirePullDown(){
    var currDiv = document.getElementById("luntai-div");
    var currTitle = document.getElementById("luntai-title");

    if(currDiv.style.display === "block"){
        currDiv.style.display = "none";
        currTitle.innerHTML = "轮胎 ▾";
    }else{
        currDiv.style.display = 'block';
        currTitle.innerHTML = "轮胎 ▴";
    }
};


function showBreakPullDown(){
    var currDiv = document.getElementById("shache-div");
    var currTitle = document.getElementById("shache-title");

    if(currDiv.style.display === "block"){
        currDiv.style.display = "none";
        currTitle.innerHTML = "刹车 ▾";
    }else{
        currDiv.style.display = 'block';
        currTitle.innerHTML = "刹车 ▴";
    }
};

export default Home;