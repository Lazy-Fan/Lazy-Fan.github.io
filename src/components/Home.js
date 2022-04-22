import React, { Fragment, useState, useEffect } from "react";
import "./CSS/Home.css";
import PullDownMenu from "./PullDownMenu.js";
import {useParams} from "react-router-dom";


const Home = () => {
    useEffect(() => {
        document.title = "懒仔番的玩车碎碎念"
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
                <h1>懒仔番的玩⻋碎碎念</h1> 
            </div>
            <hr></hr>
            
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
                    <h2>前言</h2>
                    <p>&emsp;&emsp;初衷是有一个地方能记录下自己参加赛道日之后对汽车相关知识更加深入的了解以及研究。
                        我不是工程专业亦不是职业赛车出身（本职是生物科研），因此秉承着做学术的态度去查阅资料给大家分享这些汽车知识。
                        在我个人玩车的过程中发现赛车知识非常零散且大多数是英文所以很多人不会认真去研读，民用车改装跑赛道群体巨大，
                        可由于获取知识的渠道有限以及车辆的不同，仍旧造成了很多误区。欧美有许多车友论坛，
                        但目前还没有一个良好的中文平台能提供给大家知识的梳理以及交流，
                        本站的诞生宗旨于提供给希望开始参加赛道日的小白及已经有一定经验但仍旧没有系统知识和经验的新手们一些方向。
                        作者坐标北美，希望以后本站能有更多的人受益。起步不易，我们会逐步推出更加完善的功能提供给大家。
                    </p>

                    <div className = "intro-footer">
                        <p>望共勉</p>
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
                        content1 = {"基础概念可以学习以下视频\n"}
                        link1 = {"https://www.bilibili.com/video/BV1PA411v7V7?share_source=copy_web"}
                        content2 ={"\n\n大部分常规保养都做得很不规律，因此第一次下赛到之前一定要去换机油机滤。使用的机油机滤没有太多讲究，激烈驾驶的工况下基本上两或者三个赛道日之后就要进行更换了，强烈建议使用粘度更高一点的机油。"}
                        currContentId = {"jiyou-div"}
                        currTitleId = {"jiyou-title"}
                    />


                    <PullDownMenu
                        upTriangleString = {"后差速器油 ▴"}
                        downTriangleString = {"后差速器油 ▾"}
                        content1 = {"按常规保养，但是全年下赛道场次多的情况下肯定要更早的更换。"}
                        currContentId = {"houchasuqiyou-div"}
                        currTitleId = {"houchasuqiyou-title"}
                    />


                    <PullDownMenu
                        upTriangleString = {"变速箱油 ▴"}
                        downTriangleString = {"变速箱油 ▾"}
                        content1 = {"按常规保养，个人认为可以在一两年的赛道日之后进行一次更换。"}
                        currContentId = {"biansuxiangyou-div"}
                        currTitleId = {"biansuxiangyou-title"}
                    />

                    {/* 轮胎在这 */}
                    <div className = "inside-pull-down">
                        <div className = "inside-pull-down-title" onClick = {showTirePullDown}>
                            <h3 id= "luntai-title">
                                轮胎 ▾
                            </h3>
                        </div>

                        <div id = "luntai-div" className = "inside-pull-down-content">
                            <p>
                            先划重点，轮胎非常重要！轮胎作为车子与地面唯一接触的表面，直接影响着在赛道上的抓地力，更加抓地的轮胎对于圈速的提升是非常明显且直接的。刚开始参加赛道日，大致在前三到六次可以仍旧使用原厂轮胎，因为最开始需要练习的是走线，在直道没有全油门的情况下先寻找一个大致的刹车点，同时弯速不那么快的话一般原厂轮胎是够用可以走对行车线的。对赛道更加熟悉或者有更多模拟器经验的就可以在两三个赛道日之后直接使用半热熔轮胎。但是，固然半热熔轮胎可以极大的提供抓地力提升圈速，但是不要因为轮胎更好了就忘记了刹车点、行车线及其他技巧，这里就不去赘述赛道技巧了。
                            </p>
                            <p>
                            在具体讲解下半热熔轮胎之前，还是先要提醒不要去盲目更换半热熔轮胎，因为这些轮胎目的是在干地发挥最大的抓地力，那么相比于日常使用的街胎来说，雨天的抓地力会差非常多，所以下雨天一定不要开快！相信大家会接触到很多资料说换上了xx半热熔轮胎，可是很多都不是真正的半热熔轮胎，而是含有半热熔配方的轮胎，同时又为了满足赛道人群用这台车的一部分代步需求，诞生了这一类半R胎。而真正的半热熔胎叫做R胎，是非常不耐磨的几乎不可以代步。以下是我搜集的常用半R胎和R胎的资料，在这里就给大家做一个参考:
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
                                                    <td>Yokohama A052</td>

                                                    <td>200</td>

                                                </tr>

                                            </tbody>

                                            <tbody>
                                                <tr>
                                                    <td>Michelin Pilot Sport Cup 2</td>

                                                    <td> 180</td>
                                                </tr>

                                            </tbody>

                                            <tbody>
                                                <tr>
                                                    <td>Falken Azenis RT660</td>

                                                    <td> 200</td>
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
                                                    <td>Nankang AR1</td>

                                                    <td>100</td>
                                                </tr>

                                            </tbody>

                                            <tbody>
                                                <tr>
                                                    <td>Michelin Pilot Sport Cup 2R</td>

                                                    <td>140</td>
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

                                            <tbody>
                                                <tr>
                                                    <td>Hoosier A7</td>

                                                    <td>40</td>
                                                </tr>

                                            </tbody>

                                        </table>
                                    </div>
                                </div>
                            </div>  
                            
                            <p>更好的轮胎代表着更强的抓地力，但同时对悬挂的要求也就更高。绝大部分改装车的原厂悬挂都没有能力完全适配R胎，因此没有更换绞牙避震的大部分车友们其实更换一套半R胎就够了。
                            </p>
                            
                            *轮胎尺寸等选择问题详见
                            <a href="#kaqian-title" onClick = {showLungu}>轮毂篇</a>
                            <p>最后提一下轮胎的损耗了，不同于街胎，半热熔轮胎都是用heat cycle进行计算的，heat cycle指轮胎达到一个稳定的工作温度之后一段时间又冷却下来。赛道日基本以一节15分钟为计算是一个heat cycle，那么轮胎大致可以使用30个heat cycle，以赛道日来计算的话约等于6个赛道日吧，不过具体情况还是要看驾驶的激烈程度以及轮胎花纹的磨损。</p>


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
                                content1 = {"把钢喉和刹车油放一起说，刹车油是必须升级选项。原厂使用的刹车油一般多是DOT3级别的，根本没有办法在承受赛道激烈驾驶之后的热量很容易过沸，需要至少升级到DOT4。同时可以把原厂的橡胶钢喉换成金属的，会减少热量传递之后刹车管的膨胀从而很好的保持刹车脚感。在更换了钢喉的情况下甚至可以使用DOT5.1级别的刹车油，但是DOT5.1赛油非常贵，下赛道的性价比低，还是更多使用DOT4的油比较好。推荐Motul rbf660，Castrol srf racing和Endless rf-650"}
                                currContentId = {"shacheyou-div"}
                                currTitleId = {"shacheyou-title"}
                            />

                            <PullDownMenu
                                upTriangleString = {"刹车皮 ▴"}
                                downTriangleString = {"刹车皮 ▾"}
                                content1 = {"整个刹车部件中最最重要的部分，原厂的刹车皮几乎是不可能承受住一节15分钟的激烈驾驶的，假如在对刹车要求高的赛道上可能三圈就会闻到一股焦糊味。升级使用的刹车皮推荐工作温度区间能够在100摄氏度到600摄氏度之间，可以保证在赛道上一节的时间不会有刹车衰减的情况。更换完刹车油之后配上好的刹车皮可以令制动效果达到稳定的水平，当然也要配合上相应的轮胎，更好的制动效果配上抓地力不够的轮胎只会造成abs提早介入。\n\n很多人买刹车皮时会看到摩擦系数，但是对这个指标不是特别了解的可以参考 "}
                                link1 = {"https://zhuanlan.zhihu.com/p/467681076"}
                                content2={"的回答。1.6吨以上的大马力性能车使用0.45系数的皮是不够用的，建议使用更高摩擦系数的。\n\n最后很多人应该没有关心过brake bias，指的是一台车的刹车前后分配比例。不同车型的前后分配比例是不同的，而且由于车重比例的分配，导致刹车前后力度一定是不平均的，因此前后有时候可以适配不同摩擦系数的刹车皮。推荐赛用刹车皮Paige rs29, Pfc11和Ferodo ds1.11。"}
                                currContentId = {"shachepi-div"}
                                currTitleId = {"shachepi-title"}
                            />


                            <PullDownMenu
                                upTriangleString = {"刹车盘 ▴"}
                                downTriangleString = {"刹车盘 ▾"}
                                content1 = {"碳陶瓷盘在赛道上高温情况下会直接气化，消耗特别快，当然刹车力度永远保持一致，但是一套一万多美金，除了贵没有任何缺点。民用赛道日基本都是选择钢盘，升级的话只选择划线盘，因为打孔盘的孔可能在激烈工况下裂开，那么这个盘就不能用了，在赛道上裂开的话甚至可能会造成加大的损伤和危险。划线盘中更好的选择是浮动盘，可以很好的解决散热提供稳定的摩擦力。强力推荐girodisc，不差钱可以选Ap J hook。"}
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
                    </div>

                    <PullDownMenu
                        upTriangleString = {"卡钳 ▴"}
                        downTriangleString = {"卡钳 ▾"}
                        content1 = {"一说到卡钳就令人头疼，全都是bermbo gt和ap 9660之类的，亦或者是endless。在换这些卡钳之前，先问问自己车需不需要这样子的赛用卡钳。连刹车皮和油都没有单独升级过就想直接换一套卡钳，虽说是带上了刹车皮、盘、和钢喉还有油，但是这么浪费值得吗？同时在原厂卡钳没有升级过刹车皮和油还有轮胎的情况下，问问自己到底技术够不够开到刹车和轮胎的极限。更换大活塞的卡钳还又可能需要更换原厂的刹车总泵，总泵不更换的情况下，更大的卡钳也不能提供更大的制动力，改车先健脑，不要被网上这么多商家欺骗了去更换一整套刹车，因为这肯定是利润最大的。"}
                        currContentId = {"kaqian-div"}
                        currTitleId = {"kaqian-title"}
                    />

                    <PullDownMenu
                        upTriangleString = {"轮毂 ▴"}
                        downTriangleString = {"轮毂 ▾"}
                        link1 = {"https://www.bilibili.com/video/BV18k4y127VG?share_source=copy_web"}
                        currContentId = {"lungu-div"}
                        currTitleId = {"lungu-title"}
                    />

                    <PullDownMenu
                        upTriangleString = {"底盘 ▴"}
                        downTriangleString = {"底盘 ▾"}
                        content1 = {"不同车型基础悬挂知识可以参考: "}
                        link1 = {"https://www.bilibili.com/video/BV1YZ4y1u7rb?share_source=copy_web"}
                        currContentId = {"dipan-div"}
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
                        &emsp;&emsp;从小就看F1的我喜欢赛车，但是一直觉得方程式对我太过于遥远了没有太多的想法。18岁那年考驾照我学得特别轻松，
                        觉得自己对车还是有一点天赋的，从那时候就爱上了开车。而真正了解不同品牌的车还是要到17年的时候，
                        在外留学而且大二住得离学校有点远之后就打算买车了。那时候我就对F82M4产生了拥有的想法，但还在村子里读本科，
                        家里也不让年纪比较小的我玩车，只好妥协买了一台435代步，偶尔跑跑山。等到毕业换车的时候，
                        其实在纠结到底还要不要换一台M4，毕竟开着差不多底盘的车子三年，觉得不会有太大提升，可是思来想去觉得还是想要，
                        但恰逢疫情换车也就搁置了，因此到20年末的时候才终于收到了一台心仪的F82。那时候已经对F82的毛病已经非常了解了，
                        而且收到车路上短短的几天就觉得整个底盘还是有很大差异的，庆幸自己还是做了正确的选择。
                        但是之前一直没跑过赛道的我对赛化改装还没有那么多的理解，看了很多台车，
                        厌倦了很多塑胶内饰的4系想要全皮内饰的我最后就收了一台18年带zcp套件的F82，几乎选配满了，
                        多了我不需要的各种辅助驾驶而且还带了电调悬挂。就是这个原厂电调悬挂让我现在放弃了要换绞牙避震的念头，
                        不然我一定会找一台没有辅助驾驶而且没有电调的，但又要全皮的车就更加少了。
                        也怪不得我这种要求这么多的人会想以后买911，能自己选配实在是太好了。因此我对这台车的定位是一台训练车，
                        原厂动力和悬挂的情况下进行赛化改装去提升赛道圈速和技巧，也让自己更加了解车的StreetGT。
                    </p>

                    <ul className = "project1-list1">
                        <h3>总改装清单</h3>
                        <li>轮毂：BBS CHR 19’ 9J ET20/10.5J ET25 
                            <br></br> &emsp;&emsp;&emsp;78mm MotorsportHardware Wheel stud kit 14*1.25</li>
                        <li>轮胎：*Falken RT660 F265/35/19 R295/35/19</li>
                        <li>悬挂：Swift Spec-R + Millway camber plate</li>
                        <li>底盘：*Front thrust arm bearing
                            <br></br> &emsp;&emsp;&emsp;*Spl rear toe arm
                        </li>
                        <li>空力：*Apr front splitter
                            <br></br> &emsp;&emsp;&emsp;M performance diffuser + AeroflowDynamics rear diffuser
                            <br></br> &emsp;&emsp;&emsp;M performance lip + *Apr gtc300</li>
                        <li>排气：Active Autowerke Single Midpipe + M performance exhaust</li>
                        <li>进气：K&N High Flow Air Filter
                            <br></br> &emsp;&emsp;&emsp;*Vrsf charge pipe</li>
                        <li>透气壶：Mishimoto oil catch can</li>
                        <li>刹车：Front pfc11 *Rear pfc08 Girodisc two piece rotor</li>
                        <li>刹车油：Motul rbf660</li>
                        <li>刹车钢喉：Goodridge</li>
                    </ul>


                    <p>&emsp;&emsp;总改装清单是已改装清单和之后改装项目的汇总，会不定时更新，假如有车友们的支持那改装项目就会更早更新啦。
                        在改装以及刷圈的过程中，会对车会有更深的理解也同时会认识到原厂车为了满足日常驾驶做的妥协和不足，
                        因此不断的升级改装是很必要的。一位凶狠的车手才可以驾驭更加激进的车。
                    </p>
                    <br></br>

                    <h2>第一阶段</h2>
                    <div className = "project1-stage1">
                        <ul className = "project1-list2">
                            <li>BBS CHR 19’ 9J ET20/10.5J ET25 </li>
                            <li>Michelin PS4S 255/275</li>
                            <li>H&R sport spring</li>
                            <li>M performance diffuser + M performance lip</li>
                            <li>Active Autowerke Single Midpipe + M performance exhaust</li>
                            <li>Hawk HPS5.0 pad</li>
                            <li>K&N High Flow Air Filter</li>
                            <li>Mishimoto oil catch can</li>
                        </ul>


                        <p>
                            &emsp;&emsp;我在收到这台车时正巧碰上一位车友要拆件回原厂卖车，我就以一个比较低的价格收下了排气和H&R短簧。
                            中尾段对于性能的提升其实非常的少，中段少了一个催化会降低一些回压，可能提升个10马力吧，
                            但是尾段完全就是对音色的调节了。大家最喜欢用的AK其实并不太适配F8x，
                            我认为M performance的尾段音色其实是最好听的，但大家一般收不到单独的尾端，所以我只能说比较凑巧，
                            另外中段的话AA有single和double midpipe两种，前者更偏向性能一些而后者会让音色更加好听。
                            车友正好用的是我想要的single我就一起拿下了。H&R短簧的话是附赠的我就一起拿了，
                            但是装上车之后反而觉得这套短簧特别的差，平时路上非常颠，
                            高速车身假如弹起之后根本拉不住车身让人感觉飞起来了一样。
                            在赛道上对轮荷转移和侧倾的控制也是非常的差，总体感觉是拉低了车的极限。
                        </p>


                        <p>
                            &emsp;&emsp;改装的同时因为是二手车，所以肯定是要进行一次全方面的保养的。换了hawk HPS5.0的刹车皮，
                            刹车油和钢喉，第一次换的时候没有考虑到之后下赛道会那么激烈的驾驶因此没选择赛皮，现在回想是失策了。
                            然后换了高流量的进气滤芯，机油机滤和空调滤芯都是常规保养，还有就是我换了后差速器油，装了机油透气壶。
                            S55发动机相比上代要耐操很多，可是我为了这一套动力总成能够在之后经常下场的情况下延长寿命去加装了机油透气壶。
                            这个原理就不详细说了，主要是解决缸内直喷进气积碳问题，可以提升发动机的油耗表现和性能。
                        </p>


                        <p>
                            &emsp;&emsp;现在使用的轮毂BBS CHR 19寸前9J ET20后10.5J ET25， 这套轮毂是有一个E92的车友在卖，
                            当时我还是20寸的原厂666M轮毂，觉得跑赛道使用20寸的轮胎太大了而且轮胎会很贵，原厂轮毂的数据也比较一般，
                            因此就想找一套比较便宜点但是不错的19寸轮毂。最终我用原厂的轮毂置换了现在的这套轮毂。因为是蓝色的前四后二卡钳，
                            所以我其实不用太担心ET值但其实前轮9J的数据还是稍微小了那么一点。F8x这代的车要1.6吨以上非常重，
                            所以赛道上推头的问题比较严重，原厂的轮胎根本不够宽。
                            北美圈子用F80、F82跑赛道的外国车友很多会使用前后一样295宽的轮胎，可以很大程度解决M4赛道上的推头问题。
                            受限于目前手上的这套轮毂，我也只能尽可能的去用更宽的轮胎来找抓地力。
                        </p>

                        <p>
                        &emsp;&emsp;轮毂自带的石化胎几乎没法开，我本来想定Federal的595rspro，但是朋友那边订不到，
                        于是第一套使用的是255/275的米胖子ps4s，但是下了赛道之后发现只有一圈的抓地力，连续的推极限是抱不住弯心的，
                        或者说假如要走好行车线的话弯速会非常慢。F82超过1.6吨的车重对轮胎和刹车的要求比我预想的还要高很多。
                        </p>

                    </div>

                    <br></br>
                    <h2>第二阶段</h2>
                    <div className = "project1-stage2">

                        <ul className = "project1-list3">
                            <li>78mm MotorsportHardware Wheel stud kit 14*1.25</li>
                            <li>Swift Spec-R + Millway camber plate</li>
                            <li>Falken RT660 265/275</li>
                            <li>Pfc 11 pad</li>
                            <li>Girodisc Front rotor</li>
                            <li>HAeroflowDynamics rear diffuser</li>
                            <li>Dimple M12x1.5x18 Magnetic Engine Oil Drain Plug</li>
                        </ul>

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