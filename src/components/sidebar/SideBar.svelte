<aside class='h-screen max-w-xs w-full shadow-md py-4 px-4 bg-base-200'>
    <div class="z-20 bg-base-200 bg-opacity-90 backdrop-blur sticky top-0 items-center gap-2 px-4 py-2 hidden lg:flex ">
      <a href="/" aria-current="page" aria-label="Homepage" class="flex-0 btn btn-ghost px-2">
        <div class="font-title text-primary inline-flex text-lg transition-all duration-200 md:text-3xl">
          <span class="lowercase">thrift</span>
          <span class="text-base-content uppercase">Shop</span>
        </div>
      </a> 
    </div>
    <ul class='menu menu-compact flex flex-col p-0 px-4'>
       <slot></slot>
    </ul>
</aside>