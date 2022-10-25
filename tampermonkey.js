// ==UserScript==
// @name         百度新增常见搜索
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  在百度中新增了常见搜索
// @author       bbbyqq
// @match        *://www.baidu.com/*
// @match        *://baidu.com/*
// @grant        GM_addStyle
// @license      bbbyqq
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js
// ==/UserScript==

(function () {
  'use strict'

  let div = `
        <div style="width:1000px;position: absolute;bottom: 57px;">
            <button 
              style="color: #fff;
                     background-color: #1890ff;
                     border: none #1890ff;
                     line-height: 100%;
                     position: relative;
                     display: inline-block;
                     font-weight: 400;
                     white-space: nowrap;
                     text-align: center;
                     background-image: none;
                     cursor: pointer;
                     transition: all .3s cubic-bezier(.645,.045,.355,1);
                     touch-action: manipulation;
                     height: 100%;
                     padding: 5px 20px;
                     font-size: 16px;
                     border-radius: 30px;
                     margin-right: 5px;"
              id="bing_btn">必应</button>
              <button 
              style="color: #fff;
                     background-color: #1890ff;
                     border: none #1890ff;
                     line-height: 100%;
                     position: relative;
                     display: inline-block;
                     font-weight: 400;
                     white-space: nowrap;
                     text-align: center;
                     background-image: none;
                     cursor: pointer;
                     transition: all .3s cubic-bezier(.645,.045,.355,1);
                     touch-action: manipulation;
                     height: 100%;
                     padding: 5px 20px;
                     font-size: 16px;
                     border-radius: 30px;
                     margin-right: 5px;" 
              id="segmentfault_btn">segmentfault</button>
              <button 
              style="color: #fff;
                     background-color: #1890ff;
                     border: none #1890ff;
                     line-height: 100%;
                     position: relative;
                     display: inline-block;
                     font-weight: 400;
                     white-space: nowrap;
                     text-align: center;
                     background-image: none;
                     cursor: pointer;
                     transition: all .3s cubic-bezier(.645,.045,.355,1);
                     touch-action: manipulation;
                     height: 100%;
                     padding: 5px 20px;
                     font-size: 16px;
                     border-radius: 30px;
                     margin-right: 5px;" 
              id="google_btn">谷歌</button>
              <button 
              style="color: #fff;
                     background-color: #1890ff;
                     border: none #1890ff;
                     line-height: 100%;
                     position: relative;
                     display: inline-block;
                     font-weight: 400;
                     white-space: nowrap;
                     text-align: center;
                     background-image: none;
                     cursor: pointer;
                     transition: all .3s cubic-bezier(.645,.045,.355,1);
                     touch-action: manipulation;
                     height: 100%;
                     padding: 5px 20px;
                     font-size: 16px;
                     border-radius: 30px;
                     margin-right: 5px;" 
              id="zhihu_btn">知乎</button>
              <button 
              style="color: #fff;
                     background-color: #1890ff;
                     border: none #1890ff;
                     line-height: 100%;
                     position: relative;
                     display: inline-block;
                     font-weight: 400;
                     white-space: nowrap;
                     text-align: center;
                     background-image: none;
                     cursor: pointer;
                     transition: all .3s cubic-bezier(.645,.045,.355,1);
                     touch-action: manipulation;
                     height: 100%;
                     padding: 5px 20px;
                     font-size: 16px;
                     border-radius: 30px;
                     margin-right: 5px;" 
              id="toutiao_btn">头条</button>
              <button 
              style="color: #fff;
                     background-color: #1890ff;
                     border: none #1890ff;
                     line-height: 100%;
                     position: relative;
                     display: inline-block;
                     font-weight: 400;
                     white-space: nowrap;
                     text-align: center;
                     background-image: none;
                     cursor: pointer;
                     transition: all .3s cubic-bezier(.645,.045,.355,1);
                     touch-action: manipulation;
                     height: 100%;
                     padding: 5px 20px;
                     font-size: 16px;
                     border-radius: 30px;
                     margin-right: 5px;" 
              id="douban_btn">豆瓣</button>
              <button
              style="color: #fff;
                     background-color: #1890ff;
                     border: none #1890ff;
                     line-height: 100%;
                     position: relative;
                     display: inline-block;
                     font-weight: 400;
                     white-space: nowrap;
                     text-align: center;
                     background-image: none;
                     cursor: pointer;
                     transition: all .3s cubic-bezier(.645,.045,.355,1);
                     touch-action: manipulation;
                     height: 100%;
                     padding: 5px 20px;
                     font-size: 16px;
                     border-radius: 30px;
                     margin-right: 5px;" 
              id="douyin_btn">抖音</button>
              <button 
              style="color: #fff;
                     background-color: #1890ff;
                     border: none #1890ff;
                     line-height: 100%;
                     position: relative;
                     display: inline-block;
                     font-weight: 400;
                     white-space: nowrap;
                     text-align: center;
                     background-image: none;
                     cursor: pointer;
                     transition: all .3s cubic-bezier(.645,.045,.355,1);
                     touch-action: manipulation;
                     height: 100%;
                     padding: 5px 20px;
                     font-size: 16px;
                     border-radius: 30px;
                     margin-right: 5px;" 
              id="bilibili_btn">B站</button>
        </div>
        `
  $('#form').before(div)

  $('#result_logo').css('margin-top', '30px')
  $('#form').css('margin-top', '30px')
  setInterval(() => {
    $('#s_tab').css('padding-top', '80px')
  }, 1000)

  readyClick()

  function readyClick() {
    const inputVal = $('#kw')

    $("#bing_btn").click(function () {
      const url = `https://cn.bing.com/search?q=${inputVal.val()}`
      window.open(url, '_blank')
    })

    $("#segmentfault_btn").click(function () {
      const url = `https://cn.bing.com/search?q=site:segmentfault.com%20${inputVal.val()}`
      window.open(url, '_blank')
    })

    $('#google_btn').click(function () {
      const url = `https://www.google.com/search?q=${inputVal.val()}`
      window.open(url, '_blank')
    })

    $("#zhihu_btn").click(function () {
      const url = `https://www.zhihu.com/search?type=content&q=${inputVal.val()}`
      window.open(url, '_blank')
    })

    $("#toutiao_btn").click(function () {
      const url = `https://so.toutiao.com/search?dvpf=pc&source=input&keyword=${inputVal.val()}`
      window.open(url, '_blank')
    })

    $("#douban_btn").click(function () {
      const url = `https://www.douban.com/search?source=suggest&q=${inputVal.val()}`
      window.open(url, '_blank')
    })

    $("#douyin_btn").click(function () {
      const url = `https://www.douyin.com/search/${inputVal.val()}`
      window.open(url, '_blank')
    })

    $("#bilibili_btn").click(function () {
      const url = `https://search.bilibili.com/all?keyword=${inputVal.val()}`
      window.open(url, '_blank')
    })
  }
})()
