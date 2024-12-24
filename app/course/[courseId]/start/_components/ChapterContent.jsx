import React from 'react';
import YouTube from 'react-youtube'; 
import { Chapters } from '@/configs/schema';
import Markdown from 'react-markdown';


function ChapterContent({ chapter, content }) {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  console.log("Content Data:", content);

  return (
    <div className="p-10">
      <h2 className="font-medium text-2xl">{chapter?.chapterName || "Chapter Name Not Available"}</h2>
      <p className="text-gray-500">{chapter?.about || "No description available for this chapter."}</p>

      <div className="flex justify-center my-6">
        {content?.videoId ? (
          <YouTube videoId={content.videoId} opts={opts} />
        ) : (
          <p>No video available for this chapter.</p>
        )}
      </div>

      <div>
        {Array.isArray(content?.chapter) && content.chapter.length > 0 ? (
          content.chapter.map((item, index) => (
            <div key={index} className="p-5 bg-sky-50 mb-3 rounded-lg">
              <h2 className="font-medium text-xl">{item.title || "No Title Available"}</h2>
              {/* <p className="text-gray-500 whitespace-pre-wrap">{item.explanation || "No Explanation Available"}</p> */}
              <Markdown className="text-gray-500 whitespace-pre-wrap" >{item?.explanation}</Markdown>
              {item.code_example&&<div className='p-4 bg-black text-white rounded-md mt-3'>
              <pre>
                <code>{item.code_example}</code>
              </pre>
              </div>}
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default ChapterContent;
