import type { NextPage } from 'next'
import Head from 'next/head'

import { useState } from "react";

import { marked } from "marked";

// import Markdown from 'marked-react';
// import Lowlight from 'react-lowlight';
// import javascript from 'highlight.js/lib/languages/javascript';

// Lowlight.registerLanguage('js', javascript);

type RawMarkdownData = string;

const Home: NextPage = () => {

    const [markdownData,setmarkdownData] = useState<RawMarkdownData>("# Hello World")

    const handleChange = (event : React.ChangeEvent<HTMLTextAreaElement>) => {
        setmarkdownData( event.target.value );
    }

    // const renderer = {
    //     code(snippet: any, lang: any) {
    //       return <Lowlight language={lang} value={snippet} />;
    //     },
    //   };

  return (
    <>
      <Head>
        <title>Markdown Artisan</title>
        <meta name="description" content="Markdown Artisan by Sachin Kiranti" />
        <meta name="name" content="Lorem Ipsum" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
      <div className="flex flex-row">
        <div className="basis-1/4">
          <div className="bg-white p-3">
            <div className="text-center">
            <div className="pl-2 cursor-help">

                <p className="text-3xl  hover:text-black font-bold text-indigo-600">Markdown</p>
                    <span className="text-xs block text-gray-800">Artisan</span>
                </div>
                {/* <h1 className="text-3xl text-slate-500 hover:text-black cursor-help font-bold">Markdown Artisan</h1> */}
                <div className="mt-4 flex items-center bg-gray-100 px-4 py-2 rounded-md space-x-3 w-full">
                    <input
                        className="w-full rounded-lg h-12 px-4 bg-gray-100 outline-none"
                        type="text" placeholder="Search for markdown element" 
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>        
            </div>
            <div className="mt-8">
                <ul className='overflow-auto h-96 relative'>
                        <li className="p-2 rounded-lg cursor-pointer" >
                            <div className="flex align-middle flex-row justify-between">
                        
                                <div className="p-2">
                                    <p className="text-lg text-black">Header</p> 
                                    {/* line-through  text-gray-400 */}
                                </div>
                            </div>
                            <hr className="mt-2"/>
                        </li>
                        <li className="p-2 rounded-lg cursor-pointer" >
                            <div className="flex align-middle flex-row justify-between">
                                <div className="p-2">
                                    <p className="text-lg text-black">Emphasis</p>
                                </div>
                              
                            </div>
                            <hr className="mt-2"/>
                        </li>
                        <li className="p-2 rounded-lg cursor-pointer" >
                            <div className="flex align-middle flex-row justify-between">
                                <div className="p-2">
                                    <p className="text-lg text-black">List</p>
                                </div>
                              
                            </div>
                            <hr className="mt-2"/>
                        </li>
                        <li className="p-2 rounded-lg cursor-pointer" >
                            <div className="flex align-middle flex-row justify-between">
                                <div className="p-2">
                                    <p className="text-lg text-black">Link</p>
                                </div>
                              
                            </div>
                            <hr className="mt-2"/>
                        </li>
                        <li className="p-2 rounded-lg cursor-pointer" >
                            <div className="flex align-middle flex-row justify-between">
                                <div className="p-2">
                                    <p className="text-lg text-black">Image</p>
                                </div>
                              
                            </div>
                            <hr className="mt-2"/>
                        </li>
                        <li className="p-2 rounded-lg cursor-pointer" >
                            <div className="flex align-middle flex-row justify-between">
                                <div className="p-2">
                                    <p className="text-lg text-black">Code & Syntax Hightlighting</p>
                                </div>
                              
                            </div>
                            <hr className="mt-2"/>
                        </li>
                        <li className="p-2 rounded-lg cursor-pointer" >
                            <div className="flex align-middle flex-row justify-between">
                                <div className="p-2">
                                    <p className="text-lg text-black">Footnote</p>
                                </div>
                              
                            </div>
                            <hr className="mt-2"/>
                        </li>
                        <li className="p-2 rounded-lg cursor-pointer" >
                            <div className="flex align-middle flex-row justify-between">
                                <div className="p-2">
                                    <p className="text-lg text-black">Table</p>
                                </div>
                              
                            </div>
                            <hr className="mt-2"/>
                        </li>
                        <li className="p-2 rounded-lg cursor-pointer" >
                            <div className="flex align-middle flex-row justify-between">
                                <div className="p-2">
                                    <p className="text-lg text-black">Blockquote</p>
                                </div>
                              
                            </div>
                            <hr className="mt-2"/>
                        </li>
                        <li className="p-2 rounded-lg cursor-pointer" >
                            <div className="flex align-middle flex-row justify-between">
                                <div className="p-2">
                                    <p className="text-lg text-black">Inline HTML</p>
                                </div>
                              
                            </div>
                            <hr className="mt-2"/>
                        </li>
                        <li className="p-2 rounded-lg cursor-pointer" >
                            <div className="flex align-middle flex-row justify-between">
                                <div className="p-2">
                                    <p className="text-lg text-black">Horizontal Rule</p>
                                </div>
                              
                            </div>
                            <hr className="mt-2"/>
                        </li>
                        <li className="p-2 rounded-lg cursor-pointer" >
                            <div className="flex align-middle flex-row justify-between">
                                <div className="p-2">
                                    <p className="text-lg text-black">Line Breaks</p>
                                </div>
                              
                            </div>
                            <hr className="mt-2"/>
                        </li>
                        <li className="p-2 rounded-lg cursor-pointer" >
                            <div className="flex align-middle flex-row justify-between">
                                <div className="p-2">
                                    <p className="text-lg text-black">YouTube Videos</p>
                                </div>
                              
                            </div>
                            <hr className="mt-2"/>
                        </li>
                </ul>
            </div>

            <div className='sticky bottom-0'>
            <div className="flex items-center justify-center p-5">
                <svg className="text-blue-500 dark:text-white h-6 w-auto inline-block fill-current" viewBox="0 0 24 24"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>&nbsp;
                <a className="text-black text-sm font-mono" href="https://twitter.com/sachinkiranti" target="_blank" rel="noopener noreferrer">@sachinkiranti</a>
            </div>
            <div className="flex items-center justify-center">
                <a className="text-blue text-sm font-mono" href="https://raisachin.com.np" target="_blank" rel="noopener noreferrer">https://raisachin.com.np</a>
            </div>
            </div>
            
        </div>    
        </div>
        <div className="basis-1/2 h-screen">
            <div className="bg-white h-full p-3">
                <textarea
                    onChange={handleChange}
                    style={{
                        overflow: 'auto',
                        flexGrow: '1',
                        flexShrink: '1',
                        height: '100%'
                    }}
                    placeholder="Enter the "
                    defaultValue={markdownData}
                    className="block w-full rounded-lg px-4 py-2 bg-gray-100 rounded-md shadow-sm focus:outline-none"></textarea>
            </div>
        </div>
        <div className="basis-1/2 h-screen m-2">
        <div className="h-full p-13 px-4 py-2">
            {/* <Markdown value={markdownData} renderer={renderer} /> */}
            <div className=' prose max-w-none prose-indigo leading-6 rounded-b-md shadow-sm border border-gray-300 p-5 bg-white overflow-y-auto' dangerouslySetInnerHTML={{ __html: marked(markdownData) }}></div>

        </div>
        </div>
      </div>
      </div>

    </>
  )
}

export default Home
