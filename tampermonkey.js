// ==UserScript==
// @name         百度新增常见搜索
// @namespace    http://tampermonkey.net/
// @version      1.3
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

  const btnList = [
    {
      id: 'bing_btn',
      text: '必应',
      url: 'https://cn.bing.com/search?q=',
    },
    {
      id: 'segmentfault_btn',
      text: 'segmentfault',
      url: 'https://cn.bing.com/search?q=site:segmentfault.com%20',
    },
    {
      id: 'google_btn',
      text: '谷歌',
      url: 'https://www.google.com/search?q=',
    },
    {
      id: 'zhihu_btn',
      text: '知乎',
      url: 'https://www.zhihu.com/search?type=content&q=',
    },
    {
      id: 'toutiao_btn',
      text: '头条',
      url: 'https://so.toutiao.com/search?dvpf=pc&source=input&keyword=',
    },
    {
      id: 'douban_btn',
      text: '豆瓣',
      url: 'https://www.douban.com/search?source=suggest&q=',
    },
    {
      id: 'douyin_btn',
      text: '抖音',
      url: 'https://www.douyin.com/search/',
    },
    {
      id: 'bilibili_btn',
      text: 'B站',
      url: 'https://search.bilibili.com/all?keyword=',
    },
    {
      id: 'youtube_btn',
      text: 'YouTube',
      url: 'https://www.youtube.com/results?search_query=',
    }
  ]

  let div = `<div id="baidu_add_btn" style="width:1000px;position: absolute;"></div>`

  $('#form').before(div)

  btnList.forEach(item => {
    $('#baidu_add_btn').append(`
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
               padding: 5px 15px;
               font-size: 16px;
               border-radius: 30px;"
        id="${item.id}">${item.text}</button>
    `)
  })

  $('#result_logo').css('margin-top', '30px')
  $('#lg').css('bottom', '80px')
  $('#form').css('margin-top', '30px')
  setInterval(() => {
    $('#s_tab').css('padding-top', '80px')
    if ($('#con-at').length) {
      $('#baidu_add_btn').css('bottom', '42px')
    } else {
      $('#baidu_add_btn').css('bottom', '57px')
    }
  }, 100)
  readyClick()

  function readyClick() {
    const inputVal = $('#kw')

    btnList.forEach(item =>{
      $(`#${item.id}`).click(function () {
        const url = `${item.url + inputVal.val()}`
        window.open(url, '_blank')
      })
    })
  }
})()
