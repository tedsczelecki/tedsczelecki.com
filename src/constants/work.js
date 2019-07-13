/* eslint ignore */
export const work = [
  {
	"title": "Catalyst",
	"subTitle": "",
	"description": "<p>From the day started working on Glovebox at Dashboard, we were always asked to embed third party chat systems onto our clients websites. In my opinion, the majority of them looked and functioned like garbage, and I always wanted to build a better version. After going to NADA (the largest dealer conference in North America), I set off to start building  a call tracking software using the Octane framework, which didn't last long. I soon pivoted to building a full-blown chat app, but with a little twist. Imagine, instead of  having to be physically on the computer to see and respond to chatting visitors on your site, you were able to forward the message to your phone via SMS and MMS. I used the Twilio api to forward messages to the dealer or the user if their cell number was in the system. I used NodeJS and Socket.io to provide the realtime chat and the Twilio NodeJS module to interact with Twilio. However, there were a few hardships along the way;  one of the most difficult to overcome, was what to build the criteria on, i.e. when or if to forward the message. There were a couple of iterations on this, but I ended up creating something elegant that solved chat forwarding and as a bonus, made everything easier to read.</p><p>I teamed up with a colleague to assist with the interface and design of the admin area and the chat that appears on a dealer's site. Everything ended up looking exceptionally crisp and it was extremely easy to use. We built it into the Octane platform to provide a seamless integration to the other products using the platform. While this never went to production, it was a great side project built from scratch by myself and completed a beta version.</p>",
	"info": {
	  "date": "March 4th 2016",
	  "categories": ["NodeJS", "HTML/CSS", "Postgres", "Angular", "Javascript", "Octane"],
	  "client": "Dashboard",
	  "company": "Rebel Pixel"
	},
	"slug": "catalyst"
  },
  {
	"title": "Odometer",
	"subTitle": "",
	"description": "<p>Odometer is the big data component of the Octane platform. It is a simple script that you embed on a site which will collect clickstream data for each user that visits the dealer's site. <p><p>Before starting on this, I had only done a little work with MongoDB with very few entries. Odometer has millions of entries and I needed to run large queries with analysis. I ended up using the built-in Mongo functions, MapReduce and Aggregation, to run the queries and analyse the data in one task. The output data was saved separately, so I can query it for the front end later on. I learned a lot about the internals on Mongo and how its indexes work, which sped up the queries in a very noticeable way.</p>",
	"info": {
	  "date": "15 March 2015",
	  "categories": ["NodeJS", "Angular", "HTML/CSS", "Javascript", "MongoDB"],
	  "company": "Dashboard",
	  "url" : "https://www.convertwithoctane.com/#!/products/odometer"
	},
	"slug": "odometer"
  },
  {
	"title": "Revups",
	"subTitle": "",
	"description": "<p>This was one of the most enjoyable and interesting projects that I ever worked on, even though it had its fair share of gotchas and challenges. A dealer has access to an admin area to build and completely customize a page takeover. After embedding a javascript snippet on their site, they have full control of the pages the takeover shows up on, the frequency and the start and end dates of the campaign.</p><p>Since there are over 30 different modules, I wanted to create a framework that builds the modules as quick as possible and for each one to maintain consistency. The idea was that all of the boilerplate would be done in the framework, so you would just need to build the specific functionality and style each module, speeding up the build time in the process I accomplished this by building an event and object based solution that was easy to build new modules and track the events within the module. Simply override a function or listen for an event and the module could customize the way it handles user actions.</p>",
	"info": {
	  "date": "15 January 2015",
	  "categories": ["NodeJS", "HTML/CSS","Javascript", "Postgres", "Octane"],
	  "company": "Dashboard",
	  "url" : "https://www.convertwithoctane.com/#!/products/revups"
	},
	"slug": "revups"
  },
  {
	"title": "Convert With Octane",
	"subTitle": "",
	"description": "<p>The grand vision of Octane was to become an app store for auto dealerships. This meant that the code needed to be flexible and allow features to be easily added and removed both, in core services, and the site itself.</p><p>Building Octane and the Octane framework was the most challenging and rewarding learning experience that I have encountered in my career to date. Learning new design patterns, how to scale both with users and products, and learning Angular, which powers the interface, were amongst the largest challenges. We needed a way to share components across multiple products (Glovebox V3 and Revups), but also to have those products be used in isolation. What we came up with was a build process that took smaller files which had only one piece of logic in them, and built them into a larger file to be include on the page. This gave us the ability to override specific Angular directives, functions, and/or views throughout the suite of products.</p>",
	"info": {
	  "date": "15 January 2015",
	  "categories": ["nodejs", "html", "css", "javascript", "octane"],
	  "company": "Dashboard",
	  "url" : "http://www.convertwithoctane.com"
	},
	"slug": "convert-with-octane"
  },
  {
	"title": "Walmart BlackWeb",
	"subTitle": "",
	"description": "<p>I was really excited when I landed this project because I had a chance to try my hand at building a native android app, which I hadn’t built before so I had to learn quickly. This app was for  an installation promoting Walmart’s BlackWeb speakers.</p><p>A person would get into a booth and click an icon corresponding to which speaker the sounds came out of. There were two rounds in the app. The first round speakers were in the 4 corners of the booth playing tones and the second, playing music through Bluetooth headphones. In the first round there needed to be a speaker in each corner. Initially, I had 4 single channel bluetooth speakers where the app would randomize which speaker became connected. The first issue that came up, was that once a speaker connected through Bluetooth, a connecting sound would play from that speaker and there would be a small delay before playing the tone. After wasting days on trying to figure out how to turn off the connection sound, I realized I needed another idea. I ended up switching to 2 dual channel speakers, connecting one through the headphone jack and the other through Bluetooth. Since each speaker had a left and right channel I was able to mimic the sound coming out of all four corners of the room, and success! (or so I thought...)</p><p>While everything worked well the first and sometimes even the second time through, occasionally the speakers would connect to the wrong speaker and as you can probably tell this was difficult to recreate. After over 50 hours of searching Google and Stackoverflow, I finally figured out the issue was due to the newer version of the Android MediaPlayer library. Once switching back to V4, everything worked seamlessly and it was a feeling of accomplishment that I will never forget. (Check out this stackoverflow question for a full explanation.)</p>",
	"info": {
	  "date": "1 August 2015",
	  "categories": ["android"],
	  "client": "Traffik Group",
	  "company": "Rebel Pixel"
	},
	"slug": "walmart-blackweb"
  },
  {
	"title": "Villaggio",
	"subTitle": "",
	"description": "<p>This was my first experience using Drupal to build a site. It was a straight forward build, but Drupal definitely slowed me down, (so as a result, I wasn't a huge fan of Drupal overall.</p><p>It was a one page site to showcase recipes that use the Villaggio bread. Since the map needed to be clicked and hovered over, an SVG was used. This worked well in most browsers, but there were some workarounds that needed to be solved for older browsers and Safari. In the end, I was able to create functionality across all browsers. </p>",
	"info": {
	  "date": "18 April 2015",
	  "categories": ["wordpress", "html", "css", "javascript"],
	  "client": "Traffik Group",
	  "company": "Rebel Pixel"
	},
	"slug": "villaggio"
  },
  {
	"title": "Choose Nissan",
	"subTitle": "",
	"description": "<p>‘Choose Nissan’ was a site developed for Nissan Canada to feature their monthly specials, which differ across Canada So, the user is automatically directed to their region from a landing page where they must enter their postal code. There were 5 regional sites in total with one being in English and French.</p><p>It was relatively easy to accomplish responsiveness using Foundation and there wasn't much custom javascript to do, except the dealer locator. The site is built on Glovebox, so most of the backend was already available - I just had to write some php to get custom info from the database. In addition to html and php, there were a few tools written in Python to populate certain content on the site.</p>",
	"info": {
	  "date": "15 June 2013",
	  "categories": ["html", "css", "javascript", "responsive", "glovebox"],
	  "client": "Nissan",
	  "company": "Dashboard",
	  "companyUrl": "http://www.dashboard.ca"
	},
	"slug": "choose-nissan"
  }, {
  "title": "Fletchers",
  "subTitle": "",
  "description": "<p>The Fletchers site was for their brand launch in Canada. It was a relatively simple site to show off their products, create some tasty recipes and BBQ tips for their BBQ leagues.</p><p>The site was built with Foundation and built on Glovebox, and because of that it was a nice quick build with little problems. A difficulty I did encounter was with angled text in the big daddy, where I wanted to use the `rotate` css property, so it would be able to be editable through Glovebox. In the end, I found a happy medium between font size and position.</p>",
  "info": {
	"date": "14 June 2013",
	"categories": ["html", "css", "javascript", "responsive", "glovebox"],
	"client": "Sofina",
	"company": "Dashboard",
	"url": "http://www.fletchers.com"
  },
  "slug": "fletchers"
}, {
  "title": "The Orange Difference",
  "subTitle": "",
  "description": "<p>The Orange Difference was built for ING Direct Canada to create an online version of their public accountability pdf document. This site had to be built in html so it could be ported to different servers easily. The static site, mixed with the amount of content, caused it to be a long and tedious build. On top of all that, it also had to be in English and French.</p><p>Due to the uniqueness of the site, I could not use any frameworks so I really had to flex my brain on how to achieve the transition effects, loading the content, and switching from desktop to mobile.</p>",
  "info": {
	"date": "1 June 2013",
	"categories": ["html", "css", "javascript", "responsive", "mobile"],
	"client": "ING Direct Canada",
	"company": "Dashboard",
	"companyUrl": "http://www.dashboard.ca"
  },
  "slug": "the-orange-difference"
}, {
  "title": "You Move Me",
  "subTitle": "",
  "description": "<p>This site was for the launch of the new brand You Move Me, located in both the US and Canada. This site had a lot of firsts for me which included: the first non automotive site and one that needed a blog engine on Glovebox; the first time I had used Foundation css framework; and the first time I had coded (a somewhat) responsive layout. With their business model, the need for franchises to have their own site within the corporate site was neccessary to be built into Glovebox.</p><p>I had to build a blog engine into Glovebox, which mainly included creating a taxonomy schema and all the hooks for that into Glovebox. When it came to the layout, the sidebar was the most difficult part. In the end, I used  javascript to manipulate the layout on document load (something that I cringe at the thought of, but sometimes there’s no other way).</p>",
  "info": {
	"date": "1 May 2013",
	"categories": ["html", "css", "javascript", "responsive", "php", "mobile", "glovebox"],
	"client": "You Move Me",
	"company": "Dashboard",
	"companyUrl": "http://www.dashboard.ca",
	"url": "http://www.youmoveme.com"
  },
  "slug": "you-move-me"
}, {
  "title": "Glovebox v2 Themes",
  "subTitle": "",
  "description": "<p>This is the second version of the themes that are used for dealers on the Glovebox system. In this version, the css framework and how the themes were structured, changed. Incorporating Foundation gave us the responsiveness we wanted. With the custom sass hierarchy I built, it gave us the ease of extending themes.</p><p>These were the first responsive dealer sites on any system in Canada and it was no easy task. The hardest part of this build was definitely the navigation. I wanted to use the built in Foundation navigation, but the html structure was very limiting, especially when creating the drop downs on the full sized site. With a lot of perseverance, patience and a little magic, I found a solid solution and now it functions as was intended.</p>",
  "info": {
	"date": "1 May 2013",
	"categories": ["html", "css", "javascript", "responsive", "java", "glovebox"],
	"company": "Glovebox",
	"companyUrl": "http://www.gloveboxcms.com"
  },
  "slug": "glovebox-v2-themes"
}, {
  "title": "Chatplode",
  "subTitle": "",
  "description": "<p>Chatplode was a business venture, where the client wanted to allow a user to upload an image and chat about it for up to 24 hours. The concept was very simple, and I had to do a little design work since a Themeforest theme was provided. The difficult part was creating a production site built with NodeJS and MongoDB.</p><p>This was my first site that went into production which was built on Node and Mongo. On top of that, I had to figure out how to push a NodeJS live on a rackspace server. I ended up writing everything from scratch so that I could learn how to build a Node project from the ground up. In the end, I added a few extra features within the chat like emoticons and changing your chat color. Unfortunately, the client has since taken the site down.</p>",
  "info": {
	"date": "15 January 2013",
	"categories": ["html", "css", "javascript", "nodejs", "mongodb"],
	"company" : "Personal"
  },
  "slug": "chatplode"
}, {
  "title": "Windsor Chamber of Commerce",
  "subTitle": "",
  "description": "<p>The Windsor Chamber of Commerce site was for a group that represents various businesses in and around the Windsor, Ontario area. It was built on wordpress, but it also integrated Membee profiles and directories.</p><p>The most difficult part of this site by far was integrating the Membee member info. It is a very old looking (and functioning) directory login utility that was extremely hard to use to just achieve simple pulls of information. Other than that, it was a very standard wordpress build  using custom post types and multiple plug-ins to end up with a very sleek and speedy site experience.</p>",
  "info": {
	"date": "1 April 2012",
	"categories": ["html", "css", "php", "wordpress"],
	"company" : "Personal",
	"url": "http://www.windsorchamber.org\/"
  },
  "slug": "windsor-chamber-of-commerce"
}, {
  "title": "sc2Lounge",
  "subTitle": "",
  "description": "<p>SC2Lounge was the first personal site I have made and launched. When watching Starcraft 2 and e-sports videos on YouTube, I often became aggravated when the first video out of a series would end and the next  would not automatically start. SC2Lounge was my solution. After over a year of repeatedly coding and re-coding it, it launched.</p><p>I rewrote all of the code on this site 3 times before I was happy with how the code was written and how the site functioned. The most noticeable improvement were the benchmarks in the updating process of the database. I started off using php to load the user data from YouTube and Zend Lucene to build the search index. The performance was fine for the first time around, however, once that virgin cloud lifted I started looking for another alternative. After doing a lot of research, I decided that using Java and Apache Lucene was the best bet. The only problem was, I didn’t know Java. I took the time to learn the language, which was a lot like Actionscript 3, and after writing the script that did the same thing php was doing, I couldn't have been happier with the result. There were amazing performance improvements when building the search index. I was able to get it working on the first try and I had to watch the directories to make sure it was actually working properly due to the speed. In indexing 20,000 database entries, php took ~5 minutes while java took ~9 seconds. No brainer right?!</p>",
  "info": {
	"date": "3 March 2012",
	"categories": ["html", "css", "javascript", "java", "php"],
	"company" : "Personal"
  },
  "slug": "sc2lounge"
},  {
  "title": "Glovebox v1 Themes",
  "subTitle": "",
  "description": "<p>These were the themes on the Glovebox system when it launched. When the first site launch on Glovebox in 2011, the web was just starting to really adopt the new standards in html5 and css3. Because of this, all of these sites had images for everything that is now done with css (rounded corners and background gradients to name a few).</p><p>This was the largest project I had ever taken on. It was not only a standard front-end site build, it was also creating the backend hooks and then hooking everything together. These sites are 100% compatible down to IE7 (which we all know is super fun). This was the first time I had built a production jQuery plugin.</p>",
  "info": {
	"date": "1 September 2011",
	"categories": ["html", "css", "javascript", "php", "mobile", "glovebox"],
	"company": "Glovebox",
	"companyUrl": "http://www.gloveboxcms.com"
  },
  "slug": "glovebox-v1-themes"
}, {
  "title": "The Grid TO",
  "subTitle": "",
  "description": "<p>The Grid was a relaunch of the free magazine `Eye Weekly` in Toronto. This was, and still is, the largest site that I have ever worked on, in respect to the amount of views and amount of content. The site was built on WordPress with BuddyPress integration for user profiles.</p>",
  "info": {
	"date": "15 April 2011",
	"categories": ["html", "css", "javascript", "wordpress", "php"],
	"client": "Torstar",
	"company": "Dashboard",
	"companyUrl": "http://www.dashboard.ca"
  },
  "slug": "the-grid-to"
}, {
  "title": "Rocscience",
  "subTitle": "",
  "description": "<p>Rocscience is a software company that provides information on rocks and sediment for engineers and academics for educational purposes. This site has several products and a wide range of content, from software info, news and events, to product info. This site looks identical down to IE6 with only some small specific style changes in the navigation. There are over 30 different templates on the site and it was my first project where I lead the frontend development. Until the day it was taken down, it looked and functioned flawlessly, withstanding the test of time.</p>",
  "info": {
	"date": "1 June 2010",
	"categories": ["html", "css", "javascript"],
	"client": "Rocscience",
	"company": "Dashboard",
	"companyUrl": "http://www.dashboard.ca"
  },
  "slug": "rocscience"
}, {
  "title": "Extra Money Giveaway",
  "subTitle": "",
  "description": "<p>The Extra Money Giveaway was a microsite developed for H&R Block as a fun giveaway of money and free tax services. This site hasn't been up for a while now, but it was one of my first full site builds I had ever done. The site was built using Flash and Papervision 3D in order to achieve the 3D floating. The most interesting part was the reflection on the cubes. Papervision has a reflection class for the cubes, but it didn't achieve the look that we were going for, so I had to write my own. In the end, I duplicated the image that was on the face of the cube on the fly, flipped it and created a gradient mask starting on the bottom and continuing upwards.</p>",
  "info": {
	"date": "05 March 2010",
	"categories": ["actionscript+3"],
	"client": "H&amp;R Block",
	"company": "Dashboard",
	"companyUrl": "http://www.dashboard.ca"
  },
  "slug": "extra-money-giveaway"
}, {
  "title": "Filtrete 3D",
  "subTitle": "",
  "description": "<p>Filtrete was a site created for 3M to show off the efficiency of their furnace filters. This site was one of the first sites I worked on at Dashboard, and the amount I learnt from it was unbelievable. The most interesting part of the site was an awesome stereoscopic 3d adventure down a furnace grate to see all the creepy crawlers that exist. My part of the project was developing the particel system on the  individual filter pages. Different specks of `dust` would fly in from all angles and get trapped on the filters. This site won an FWA Site of the Day award, Applied Arts award and was featured in the stereoscopic edition of .Net Magazine.</p>",
  "info": {
	"date": "15 September 2009",
	"categories": ["actionscript+3"],
	"client": "3M",
	"company": "Dashboard",
	"companyUrl": "http://www.dashboard.ca"
  },
  "slug": "filtrete-3d"
}]

export const workLookup = work.reduce((acc, work) => {
  acc[work.slug] = work;
  return acc;
}, {});

export default {
	work,
	workLookup
}
