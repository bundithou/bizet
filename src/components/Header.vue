<template>
    <header class="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-40 w-full bg-white text-sm py-4 dark:bg-gray-800">
      <nav class="max-w-[85rem] w-full mx-auto sm:px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
        <div class="flex items-center justify-between">
          <a class="flex-none text-xl font-semibold dark:text-white" href="#">Bizet</a>
          <div class="sm:hidden">
            <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-basic" aria-controls="navbar-collapse-basic" aria-label="Toggle navigation">
              <svg class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
              <svg class="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
        </div>
        <div id="navbar-collapse-basic" class="hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
          <div data-hs-scrollspy="#scrollspy-1"  data-hs-scrollspy-scrollable-parent="#scrollspy-scrollable-parent-1" class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5 [--scrollspy-offset:220] md:[--scrollspy-offset:70]">
            <a class="text-sm text-gray-700 leading-6 hover:text-gray-500 focus:outline-none focus:text-blue-600 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:text-blue-500 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400 active" href="#first">Home</a>
            <a class="text-sm text-gray-700 leading-6 hover:text-gray-500 focus:outline-none focus:text-blue-600 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:text-blue-500 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400" href="#second">Why us</a>
            <a class="text-sm text-gray-700 leading-6 hover:text-gray-500 focus:outline-none focus:text-blue-600 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:text-blue-500 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400" href="#third">Services</a>
            <!-- <a class="text-sm text-gray-700 leading-6 hover:text-gray-500 focus:outline-none focus:text-blue-600 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:text-blue-500 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400" href="#fourth">FAQ</a> -->
            <a class="text-sm text-gray-700 leading-6 hover:text-gray-500 focus:outline-none focus:text-blue-600 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:text-blue-500 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400" href="#fourth">Contact us</a>
          </div>
        </div>
      </nav>
    </header>
</template>