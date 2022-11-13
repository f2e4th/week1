<template>
  <div class="text-white container_question">
    <div class="question-title mb-10">常見問答</div>
    <div class="flex question-content justify-center">
    <div class="tab-list">
        <ul class="tabs">
        <li
          v-for="tab in tabs"
          :class="{ active: tab.value == nowTab }"
          :key="tab.value"
          @click="changeTab(tab.value)"
          v-html="tab.name"
        ></li>
    </ul>
    </div>
   
    <div class="tab-section">
    <div v-if="nowTab == '1'">
    <ul>
       
        <li :class="'button' + item.id" v-for="item in content1" :key="item.id">
        
        <div class="tab_content text-white">
        <!-- <img class="redlove" src="../assets/images/red_love.png"/>
        <img class="greenlove" src="../assets/images/green_love.png"/> -->
          <div
            class="tab_content_inner collapsed text-white"
            :class="'tab_content_inner' + item.id"
            data-bs-toggle="collapse"
            :href="'#collapseExample' + item.id"
            role="button"
            aria-expanded="false"
            :aria-controls="'collapseExample' + item.id"
            id="collsapse"
          >
            {{item.question}}
          </div>
          <div class="collapse" :id="'collapseExample' + item.id">
            <div class="card card-body p-4">
              {{item.answers}}
            </div>
          </div>
      </div>

        </li>
    </ul>
    </div>
    <div v-if="nowTab == '2'">
    <ul>
        <li :class="'button' + item.id" v-for="item in content2" :key="item.id">
        <div class="tab_content text-white">
          <div
            class="tab_content_inner collapsed text-white"
            :class="'tab_content_inner' + item.id"
            data-bs-toggle="collapse"
            :href="'#collapseExample' + item.id"
            role="button"
            aria-expanded="false"
            :aria-controls="'collapseExample' + item.id"
            id="collsapse"
          >
            {{item.question}}
          </div>
          <div class="collapse" :id="'collapseExample' + item.id">
            <div class="card card-body">
              {{item.answers}}
            </div>
          </div>
      </div>

        </li>
    </ul>
    </div>
    <div v-if="nowTab == '3'">
    <ul>
        <li :class="'button' + item.id" v-for="item in content3" :key="item.id">
        <div class="tab_content text-white">
          <div
            class="tab_content_inner collapsed text-white"
            :class="'tab_content_inner' + item.id"
            data-bs-toggle="collapse"
            :href="'#collapseExample' + item.id"
            role="button"
            aria-expanded="false"
            :aria-controls="'collapseExample' + item.id"
            id="collsapse"
          >
            {{item.question}}
          </div>
          <div class="collapse" :id="'collapseExample' + item.id">
            <div class="card card-body">
              {{item.answers}}
            </div>
          </div>
      </div>

        </li>
    </ul>
    </div>
    <div v-if="nowTab == '4'">
    <ul>
        <li :class="'button' + item.id" v-for="item in content4" :key="item.id">
        <div class="tab_content text-white">
          <div
            class="tab_content_inner collapsed text-white"
            :class="'tab_content_inner' + item.id "
            data-bs-toggle="collapse"
            :href="'#collapseExample' + item.id"
            role="button"
            aria-expanded="false"
            :aria-controls="'collapseExample' + item.id"
            id="collsapse"
          >
            {{item.question}}
          </div>
          <div class="collapse" :id="'collapseExample' + item.id">
            <div class="card card-body">
              {{item.answers}}
            </div>
          </div>
      </div>

        </li>
    </ul>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
// import {tabs} from '../script/tab';

export default {
  data: () => ({
    tabs: [
      {
        name: "常見問答",
        isActive: true,
        value: "1",
      },
      {
        name: "UI 設計師常見問題",
        isActive: false,
        value: "2",
      },
      {
        name: "前端工程師常見問題",
        isActive: false,
        value: "3",
      },
      {
        name: "團體組常見問題",
        isActive: false,
        value: "4",
      },
    ],
    nowTab: "",
    count: 0,
    content1:[{
       question:'Q：請問團體組最多幾人?',
       answers: 'A：最多4人，投稿作品時請派一位組長來投稿即可。',
       id:"1"
    },
    {
       question:'Q：大家都好強，我怕我做的東西沒有達到過關門檻，不敢登錄作品',
       answers: 'A：這個活動並非競爭性質，每個參賽者都是你的隊友，最大的敵人是你自己，因為你必須定期練功前端開發，讓自己能夠順利完賽。',
       id:"2"
    },{
       question:'Q：我不確定自己做的版型有沒有符合過關門檻，要寫到什麼程度才有到過關門檻',
       answers: 'A：主辦單位其實不會去審核大家的程式碼，只要你認為當週你有針對主題有做到一定程度，就算是半完成品也請大方投稿，不用擔心。',
       id:"3"
    },{
       question:'Q：我已經寫到一半了，但時間快來不及，可以先投稿嗎？',
       answers: 'A：可以，有投稿表示你還會持續努力在這次活動上。',
       id:"4"
    }
    ],
    content2:[{
       question:'Q：到時投稿到平台是提供什麼呢？我也不像是工程師可以有 CODEPEN 上傳。',
       answers: 'A：其中投稿的欄位裡面會有一個「線上標示文件」，像是 Adobe XD 便有提供該服務(範例連結)，屆時提供標示文件後，便可讓其他前端工程師採用你的設計稿來開發。',
       id:"1"
    },
    {
       question:'Q：投稿上去的 UI 作品，我知道需要授權讓前端工程師組做成 Web 介面，那授權部分可以設定嗎？',
       answers: 'A：會有的，屆時平台投稿流程上，會讓您的作品可以選擇 CC0、CC BY 等授權，以保障您的 UI 作品權益。',
       id:"2"
    },{
       question:'Q：一定要上傳「線上標示文件」嗎？',
       answers: 'A：是的，因為這樣才有辦法讓其他前端工程師，能採用您的設計稿，將您的設計稿實作出網頁格式。如果您是使用 Sketch，也可使用 Sketch Measure 編譯出來後，壓縮 ZIP 到雲端空間 (Dropbox、Google Drive)。',
       id:"3"
    },{
       question:'Q：不能使用 PS、Illustrator 設計嗎？',
       answers: 'A：只要您能找到 PS 或 Illustrator 產出線上標示文件的方式就可以，因為前端工程師大部分皆比較少具有繪圖軟體，所以用線上標示文件將會減少許工程師協作上的溝通時間。',
       id:"4"
    },{
       question:'Q：當每週一題目出來後，我有一些設計進度也可以先投稿嗎？',
       answers: 'A：可以，團隊在協作過程中，一定也會先出些進度提供前端切版，有進度時您也可以先投稿，讓前端工程師可以先接手，之後再透過 FB 社團來溝通進度即可。',
       id:"5"
    }
    ],
    content3:[{
       question:'Q：我可以不依照設計稿，自己做版面嗎？因為我想多練習 JS / 後端',
       answers: 'A：可以，The F2E 活動是希望讓大家人人有功練，所以依照你自己想投入的方向練功即可。CSS 也可以用框架，例如 Bootstrap。',
       id:"1"
    },
    {
       question:'Q：前端介面一定要長得一模一樣嗎？',
       answers: 'A:不用，依照自己的想法來開發也可以',
       id:"2"
    },{
       question:'Q：有現成的網頁靜態頁面嗎？我想只練習 JS / 後端就好',
       answers: 'A：這段我們不會提供，畢竟每個人習慣的 Coding style 又不一樣，產出的 HTML、CSS 並非是自己習慣的 Layout 反而會更花時間。',
       id:"3"
    },{
       question:'Q：那我只想要練習 JS，HTML/CSS 我用陽春版，不依照設計稿開發可以嗎？',
       answers: 'A:可以，你可以當做我們就是出一個主題，你依照那主題當作參考方向來開發即可。',
       id:"4"
    }
    ],
    content4:[{
       question:'Q：請問團體組最多幾人？',
       answers: 'A:最多 4 人，投稿作品時請派一位組長來投稿即可。',
       id:"1"
    },
    {
       question:'Q：那團體組第三道主題最晚投稿期限為？',
       answers: 'A：團體組投稿第三週 UI 最晚投稿時間為 11/21(一) 中午 12 點，前端最晚投稿期限為 11/28(一) 中午 12 點。',
       id:"2"
    },{
       question:'Q：我們團體組比較想做手機 APP，可以投稿並符合評審門檻嗎？',
       answers: 'A：您可以開發手機 APP，若有在期限前投稿也能獲得數位獎狀。但評審門檻僅限 Web 瀏覽器應用開發，Android、iOS APP 則不在評審範圍內，故不符合評審門檻。',
       id:"3"
    },{
       question:'Q：請問除了前端開發、UI 設計外，還能做其他加值應用嗎？例如後端動態應用整合？',
       answers: 'A：可以的，只要能透過網頁瀏覽器操控您的服務，並有使用到 TDX API 的任何一個 API，您可以依照本次主題「全台公車動態時刻查詢應用服務」做最大的加值整合應用，甚至搭配後端應用，整合多個外部 API 也是可以的。',
       id:"4"
    },{
       question:'Q：團體組的 UI 設計稿，可以讓『個人組-前端工程師』組別採用嗎？',
       answers: 'A:不能，預設是不能讓『個人組-前端工程師』採用。',
       id:"5"
    }
    ],
  }),
  methods: {
    changeTab(tab) {
      console.log(tab);
      this.nowTab = tab;
    },
  },
  watch:{
  },
  mounted() {
  },
  created() {
    this.tabs.forEach((x) => {
      if (x.isActive) {
        this.nowTab = x.value;
      }
    });
  },
};
</script>