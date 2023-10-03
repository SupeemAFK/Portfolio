<script lang="ts">
    import DiGithubBadge from 'svelte-icons/di/DiGithubBadge.svelte'
    
    export let projectName = "";
    export let details = "";
    export let img = "";
    export let tools = [""]
    export let links = [{ header: "", link: "" }]
    export let sourceCode = "";
    export let available = { itchio: "", steam: "", playstore: "" }
</script>

<div class=" bg-neutral-900 text-white rounded-md max-w-md mt-5">
    <div class="rounded-t-md">
        <img class="object-cover rounded-t-md" src={img} alt={projectName} />
    </div>
    <div class="p-5">
        <div>
            <h1 class="text-lg font-semibold">{projectName}</h1>
            <p class="mt-1">{details}</p>
        </div>
        {#if  tools.some(tool => tool != "")}
            <div class="flex mt-5">
                <h1 class="text-lg font-semibold mr-3">Tools: </h1>
                <div class="flex items-center w-full flex-wrap">
                    {#each tools as tool}
                        {@html tool}
                    {/each}
                </div>
            </div>
        {/if}
        {#if links.some(link => link.link != "")}
            <div class="mt-5">
                {#each links as link}
                    <div class="flex">
                        <h1 class="text-lg font-semibold flex-[0.2]">{link.header}: </h1>
                        <a class="break-all flex-[0.8] ml-2 underline" href={link.link}>{link.link}</a>
                    </div>
                {/each}
            </div>
        {/if}
        {#if available.itchio != "" || available.steam != "" || available.playstore != ""}
            <div class="flex mt-5">
                <h1 class="text-lg font-semibold mr-3">Available:</h1>
                <div class="flex items-center w-full flex-wrap">
                    {#if available.itchio != ""}
                        <a href={available.itchio}>
                            <button class="flex items-center mt-2 mr-2 bg-[#FF2449] hover:scale-125 rounded-md p-2 transition-all duration-300">
                                <div class="w-7 h-7">
                                    <svg fill="#ffffff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.172 1.787c-1.396 0.828-4.145 3.984-4.172 4.812v1.375c0 1.735 1.625 3.267 3.099 3.267 1.771 0 3.251-1.469 3.251-3.213 0 1.744 1.421 3.213 3.197 3.213 1.771 0 3.151-1.469 3.151-3.213 0 1.744 1.516 3.213 3.287 3.213h0.032c1.776 0 3.291-1.469 3.291-3.213 0 1.744 1.381 3.213 3.152 3.213s3.197-1.469 3.197-3.213c0 1.744 1.475 3.213 3.245 3.213 1.479 0 3.104-1.532 3.104-3.267v-1.375c-0.032-0.828-2.776-3.984-4.177-4.812-4.339-0.156-7.344-0.183-11.823-0.183-4.484 0.005-10.593 0.073-11.828 0.183zM12.677 10.421c-0.183 0.308-0.385 0.568-0.625 0.797v0.005c-0.672 0.651-1.588 1.057-2.599 1.057-1.016 0-1.932-0.407-2.599-1.063-0.245-0.235-0.428-0.489-0.6-0.787-0.167 0.297-0.4 0.552-0.645 0.787-0.672 0.656-1.588 1.063-2.599 1.063 0 0 0 0-0.005 0-0.12 0-0.245-0.036-0.349-0.073-0.14 1.485-0.203 2.901-0.224 3.937v0.005c-0.005 0.527-0.005 0.953-0.011 1.552 0.032 3.115-0.307 10.089 1.376 11.803 2.604 0.604 7.396 0.88 12.197 0.885h0.005c4.807-0.005 9.593-0.281 12.197-0.885 1.683-1.713 1.344-8.688 1.376-11.803-0.005-0.599-0.005-1.025-0.011-1.552v-0.005c-0.021-1.036-0.079-2.452-0.224-3.937-0.099 0.037-0.229 0.073-0.349 0.073 0 0-0.005 0-0.005 0-1.011 0-1.927-0.407-2.599-1.063h0.005c-0.245-0.235-0.479-0.489-0.645-0.787h-0.005c-0.167 0.297-0.355 0.552-0.595 0.787-0.667 0.656-1.583 1.063-2.599 1.063-1.011 0-1.927-0.407-2.599-1.063-0.24-0.229-0.443-0.495-0.615-0.787l-0.011-0.016c-0.172 0.308-0.38 0.573-0.615 0.803-0.672 0.656-1.588 1.063-2.599 1.063 0 0-0.005 0-0.005 0-0.031 0-0.068 0-0.104-0.005-0.036 0.005-0.073 0.005-0.109 0.005 0 0 0 0-0.005 0-1.011 0-1.927-0.407-2.593-1.063-0.24-0.229-0.443-0.495-0.609-0.787l-0.011-0.016zM10.005 13.875c1.057 0.005 1.995 0 3.161 1.271 0.916-0.093 1.875-0.14 2.833-0.14s1.917 0.047 2.833 0.14c1.167-1.271 2.104-1.271 3.161-1.271h0.005c0.5 0 2.5 0 3.891 3.912l1.495 5.369c1.109 3.995-0.355 4.095-2.177 4.095-2.708-0.1-4.208-2.068-4.208-4.037-1.5 0.251-3.251 0.371-5 0.371s-3.5-0.12-4.995-0.371c0 1.969-1.5 3.937-4.208 4.037-1.828-0.005-3.292-0.1-2.183-4.095l1.495-5.369c1.396-3.912 3.396-3.912 3.896-3.912zM16 16.953c-0.005 0-2.849 2.62-3.364 3.547l1.864-0.073v1.625c0 0.079 0.751 0.047 1.5 0.011 0.749 0.036 1.495 0.068 1.495-0.011v-1.625l1.869 0.073c-0.515-0.927-3.364-3.547-3.364-3.547z"></path> </g></svg>
                                </div>
                                Itch.io
                            </button>
                        </a>
                    {/if}
                    {#if available.steam != ""}
                        <a href={available.steam}>
                            <button class="flex items-center mt-2 mr-2 bg-[#132E62] hover:scale-125 rounded-md p-2 transition-all duration-300">
                                <div class="w-7 h-7">
                                    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.56967 20.0269C4.30041 25.7964 9.65423 30 15.9906 30C23.7274 30 29.9995 23.7318 29.9995 16C29.9995 8.26803 23.7274 2 15.9906 2C8.56634 2 2.49151 7.77172 2.01172 15.0699C2.01172 17.1667 2.01172 18.0417 2.56967 20.0269Z" fill="url(#paint0_linear_87_8314)"></path> <path d="M15.2706 12.5629L11.8426 17.5395C11.0345 17.5028 10.221 17.7314 9.54572 18.1752L2.01829 15.0784C2.01829 15.0784 1.84411 17.9421 2.56999 20.0763L7.89147 22.2707C8.15866 23.464 8.97779 24.5107 10.1863 25.0142C12.1635 25.8398 14.4433 24.8988 15.2658 22.922C15.4799 22.4052 15.5797 21.8633 15.5652 21.3225L20.5904 17.8219C23.5257 17.8219 25.9114 15.4305 25.9114 12.4937C25.9114 9.55673 23.5257 7.16748 20.5904 7.16748C17.7553 7.16748 15.1117 9.64126 15.2706 12.5629ZM14.4469 22.5783C13.8103 24.1057 12.054 24.8303 10.5273 24.1946C9.82302 23.9014 9.29128 23.3642 8.98452 22.7237L10.7167 23.4411C11.8426 23.9098 13.1343 23.3762 13.6023 22.2514C14.0718 21.1254 13.5392 19.8324 12.4139 19.3637L10.6233 18.6222C11.3142 18.3603 12.0997 18.3507 12.8336 18.6559C13.5734 18.9635 14.1475 19.5428 14.4517 20.283C14.756 21.0233 14.7548 21.8404 14.4469 22.5783ZM20.5904 16.0434C18.6364 16.0434 17.0455 14.4511 17.0455 12.4937C17.0455 10.5379 18.6364 8.94518 20.5904 8.94518C22.5457 8.94518 24.1365 10.5379 24.1365 12.4937C24.1365 14.4511 22.5457 16.0434 20.5904 16.0434ZM17.9341 12.4883C17.9341 11.0159 19.127 9.82159 20.5964 9.82159C22.0671 9.82159 23.2599 11.0159 23.2599 12.4883C23.2599 13.9609 22.0671 15.1541 20.5964 15.1541C19.127 15.1541 17.9341 13.9609 17.9341 12.4883Z" fill="white"></path> <defs> <linearGradient id="paint0_linear_87_8314" x1="16.0056" y1="2" x2="16.0056" y2="30" gradientUnits="userSpaceOnUse"> <stop stop-color="#111D2E"></stop> <stop offset="0.21248" stop-color="#051839"></stop> <stop offset="0.40695" stop-color="#0A1B48"></stop> <stop offset="0.5811" stop-color="#132E62"></stop> <stop offset="0.7376" stop-color="#144B7E"></stop> <stop offset="0.87279" stop-color="#136497"></stop> <stop offset="1" stop-color="#1387B8"></stop> </linearGradient> </defs> </g></svg>
                                </div>
                                Steam
                            </button>
                        </a>
                    {/if}
                    {#if available.playstore != ""}
                        <a href={available.playstore}>
                            <button class="flex items-center mt-2 bg-[#01F176] hover:scale-125 rounded-md p-2 transition-all duration-300">
                                <div class="w-7 h-7">
                                    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <mask id="mask0_87_8320" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="7" y="3" width="24" height="26"> <path d="M30.0484 14.4004C31.3172 15.0986 31.3172 16.9014 30.0484 17.5996L9.75627 28.7659C8.52052 29.4459 7 28.5634 7 27.1663L7 4.83374C7 3.43657 8.52052 2.55415 9.75627 3.23415L30.0484 14.4004Z" fill="#C4C4C4"></path> </mask> <g mask="url(#mask0_87_8320)"> <path d="M7.63473 28.5466L20.2923 15.8179L7.84319 3.29883C7.34653 3.61721 7 4.1669 7 4.8339V27.1664C7 27.7355 7.25223 28.2191 7.63473 28.5466Z" fill="url(#paint0_linear_87_8320)"></path> <path d="M30.048 14.4003C31.3169 15.0985 31.3169 16.9012 30.048 17.5994L24.9287 20.4165L20.292 15.8175L24.6923 11.4531L30.048 14.4003Z" fill="url(#paint1_linear_87_8320)"></path> <path d="M24.9292 20.4168L20.2924 15.8179L7.63477 28.5466C8.19139 29.0232 9.02389 29.1691 9.75635 28.766L24.9292 20.4168Z" fill="url(#paint2_linear_87_8320)"></path> <path d="M7.84277 3.29865L20.2919 15.8177L24.6922 11.4533L9.75583 3.23415C9.11003 2.87878 8.38646 2.95013 7.84277 3.29865Z" fill="url(#paint3_linear_87_8320)"></path> </g> <defs> <linearGradient id="paint0_linear_87_8320" x1="15.6769" y1="10.874" x2="7.07106" y2="19.5506" gradientUnits="userSpaceOnUse"> <stop stop-color="#00C3FF"></stop> <stop offset="1" stop-color="#1BE2FA"></stop> </linearGradient> <linearGradient id="paint1_linear_87_8320" x1="20.292" y1="15.8176" x2="31.7381" y2="15.8176" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFCE00"></stop> <stop offset="1" stop-color="#FFEA00"></stop> </linearGradient> <linearGradient id="paint2_linear_87_8320" x1="7.36932" y1="30.1004" x2="22.595" y2="17.8937" gradientUnits="userSpaceOnUse"> <stop stop-color="#DE2453"></stop> <stop offset="1" stop-color="#FE3944"></stop> </linearGradient> <linearGradient id="paint3_linear_87_8320" x1="8.10725" y1="1.90137" x2="22.5971" y2="13.7365" gradientUnits="userSpaceOnUse"> <stop stop-color="#11D574"></stop> <stop offset="1" stop-color="#01F176"></stop> </linearGradient> </defs> </g></svg>
                                </div>
                                Playstore
                            </button>
                        </a>
                    {/if}
                </div>
            </div>
        {/if}
        {#if sourceCode}
            <div class="flex justify-end mt-5">
                <a href={sourceCode}>
                    <div class="border-2 border-white hover:bg-white hover:text-neutral-900 flex items-center p-2 rounded-md text-xs transition-all duration-300">
                        <p>View Project</p>
                        <div class="w-5 h-5 ml-1">
                            <DiGithubBadge />
                        </div>
                    </div>
                </a>
            </div>
        {/if}
    </div>
</div>