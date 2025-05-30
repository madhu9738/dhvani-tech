// React + Tailwind version of ChatterBox chat layout
import React from "react";

function App() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white overflow-x-hidden font-[Inter,Noto Sans,sans-serif]">
      <div className="flex h-full grow flex-col">
        <header className="flex items-center justify-between border-b border-[#f0f2f5] px-10 py-3">
          <div className="flex items-center gap-4 text-[#111418]">
            <div className="w-4 h-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold tracking-tight">ChatterBox</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <button className="flex items-center justify-center h-10 px-2.5 bg-[#f0f2f5] rounded-lg text-sm font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
              </svg>
            </button>
            <div className="w-10 h-10 bg-cover bg-center rounded-full" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBJDWT-V81xU5pFcAVwSXIoD073TVR_FCASnepXrjcprIyldtQ5jtU4_v9kTsCpCdYqkcpO7RdC8DdRUZ1BHExLgz2NODYiLnl1pg02YY1soYGIHGfOiNxlwSpH4qHRCWdD4zIzgHnO3vamHUoVh759XfBzv743bEzLZY5VJo7hN2kZn_mfo1GgG3elYj_-AkxKjLM3W0KnrktOK0hsTu-WvGYrn7GIgeRhkup7Sz5GQSEKMmk-uRK044w42O0qtG_sVd8YDMq0ano')" }} />
          </div>
        </header>

        <main className="px-40 py-5 flex justify-center flex-1">
          <div className="flex flex-col max-w-[960px] w-full">
            {/* Chat bot message */}
            <div className="flex items-end gap-3 p-4">
              <div className="w-10 h-10 bg-cover bg-center rounded-full" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAnRFyM2ShMveEyQdAZA46IPLzy-7tSGnxSwISx8m-5fDu_cOcHuyW5jBXvnDUYny56dDm3HJBN6ujajy9KJSmd9njdGXAXSPyKCFQ2EWtpTYjiaaqa-lSK0AH_3hPUVan2Zn4qlSYzywls0DFQBpkmxDRlHTfO-7Fvqfvm22Bq175LgIQnq_dpludpIavUoz7XpqbcUWQN12VjPDTuH0wvRmJlzYp-oMBCrQdh6Y1d716jizvCEJ0corTM1w550BBSzrwNG3Z7jH0')" }} />
              <div className="flex flex-col gap-1">
                <p className="text-sm text-[#60758a]">ChatterBox</p>
                <p className="bg-[#f0f2f5] text-[#111418] px-4 py-3 rounded-lg max-w-[360px] text-base">Hello! How can I assist you today?</p>
              </div>
            </div>

            {/* User message */}
            <div className="flex items-end gap-3 p-4 justify-end">
              <div className="flex flex-col gap-1 items-end">
                <p className="text-sm text-[#60758a] text-right">Sophia</p>
                <p className="bg-[#0c7ff2] text-white px-4 py-3 rounded-lg max-w-[360px] text-base">Hi! I need help with my account.</p>
              </div>
              <div className="w-10 h-10 bg-cover bg-center rounded-full" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAAvLAT0BhdTJd7cb57tErqdmbl625p_BGpALEhxBfwyUxue_e4APTEiqYY-qu9QYQ68_4mlQJkr9aFjvo2GA770jxOiJE-JDpqlS-inGrgfPa2mqFk2ZqYHHiiDIc37QQ88XfSHw_21TwpxSFUglMCqS-5MtOz2u-HcsY937YbU3ENwjpPcFLk3LODJxNq3cT4IjolMywzndkgAzPqrWEX1HbRck3PVayEmRzNCv7ifjw4-upuH66HLsxmz5ZZHPku1obdTQJ7ph0')" }} />
            </div>

            {/* Input area */}
            <div className="flex items-center px-4 py-3 gap-3">
              <div className="w-10 h-10 bg-cover bg-center rounded-full" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsU8lenV0DvaJxD0WfFarUStH-JaiwVeX04S1t9biewcKkKK_1EIEVcW4aICL6X0sWUWHALIUsWdTnp_QpzaNRV5ZyKKuR-U-qouS5PCo-6ixCoAzvoLIYko_PRIErg1Tq2pSCyMmty6zk8zyJ187T-U67o-3dKrDbCDZxj0Qau8V5RRLW5mLAB2YrlL0Q7qWLJPcu4gHGYRzaL4OrwIcmCHy5fDrUcKKHLu4zsxNMqOAuLg2IyV_av-ZZzdCTL7tazE5x9CZu5qU')" }} />
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 h-12 px-4 rounded-l-lg bg-[#f0f2f5] border-none focus:outline-none text-[#111418] placeholder-[#60758a]"
              />
              <button className="bg-[#0c7ff2] text-white text-sm font-medium px-4 h-12 rounded-r-lg">Send</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
