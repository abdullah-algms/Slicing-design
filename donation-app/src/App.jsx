import img1 from './assets/1.png'
import img2 from './assets/2.png'
import img3 from './assets/3.png'
import ob1 from './assets/ob.jpeg'
import ob2 from './assets/ob2.jpeg'






import Header from './components/header.jsx'
import Card from './components/card.jsx'




function App() {
  

  return (
    <>
      <div className="md:mx-auto container mx-[30px]">
        
        <div className="pt-[46px] inline-flex justify-center items-center gap-[159px]">
          <img src="https://www.w3schools.com/howto/img_avatar2.png" className="h-[50px] w-[50px] rounded-full" />
          <div className="flex justify-center items-center gap-[7px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M14.7321 1.91367C14.7595 1.88182 14.7936 1.85546 14.8323 1.83618C14.871 1.81689 14.9136 1.8051 14.9574 1.80151C15.0012 1.79792 15.0453 1.8026 15.0871 1.81528C15.1289 1.82796 15.1674 1.84837 15.2004 1.87527L16.3952 2.84968L12.6344 7.19975H15.1265L17.8586 4.0413L20.0017 5.78973C20.0651 5.84153 20.1041 5.91417 20.1104 5.99218C20.1167 6.07019 20.0898 6.1474 20.0355 6.20733L19.1403 7.19975H21.6623C21.9747 6.77671 22.1091 6.26264 22.0403 5.7543C21.9715 5.24596 21.7042 4.77843 21.2886 4.4397L16.4886 0.524046C16.2571 0.335407 15.9864 0.192411 15.6931 0.103791C15.3998 0.0151709 15.09 -0.0172128 14.7827 0.00861779C14.4754 0.0344483 14.1771 0.117951 13.9058 0.254026C13.6346 0.3901 13.3962 0.575891 13.2052 0.80005L7.75265 7.19975H10.2305L14.7321 1.91367ZM2.91892 6.59974C2.66087 6.59974 2.41339 6.69456 2.23092 6.86335C2.04845 7.03213 1.94595 7.26105 1.94595 7.49975C1.94595 7.73845 2.04845 7.96737 2.23092 8.13616C2.41339 8.30494 2.66087 8.39977 2.91892 8.39977H19.7838C20.902 8.39977 21.9744 8.81066 22.7651 9.54207C23.5558 10.2735 24 11.2655 24 12.2998V20.0999C24 21.1343 23.5558 22.1263 22.7651 22.8577C21.9744 23.5891 20.902 24 19.7838 24H4.21622C3.09801 24 2.02559 23.5891 1.2349 22.8577C0.444207 22.1263 0 21.1343 0 20.0999V7.49975C0 6.78366 0.307528 6.09689 0.854931 5.59053C1.40233 5.08418 2.14477 4.79971 2.91892 4.79971H8.52324L6.97686 6.59974H2.91892ZM16.2162 16.4999C16.2162 16.9967 16.6521 17.3999 17.1892 17.3999H19.7838C20.0418 17.3999 20.2893 17.3051 20.4718 17.1363C20.6542 16.9675 20.7568 16.7386 20.7568 16.4999C20.7568 16.2612 20.6542 16.0323 20.4718 15.8635C20.2893 15.6947 20.0418 15.5999 19.7838 15.5999H17.1892C16.9311 15.5999 16.6837 15.6947 16.5012 15.8635C16.3187 16.0323 16.2162 16.2612 16.2162 16.4999Z" fill="#FF617D"/>
            </svg>
            <p className="text-[#000] font-bold font-medium leading-normal text-xl">$365.04</p>
          </div>
        </div>
        
        <form className="flex items-center mt-[36px]">
          <label for="search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
          <div className="relative flex">
            <input type="search" id="search" className="block w-[330px] p-5  text-sm text-gray-900 rounded-xl focus:ring-blue-500 focus:border-blue-500" placeholder="Type Something...." style={{ backgroundColor: 'rgba(205, 205, 205, 0.15)' }} required />
            <button type="submit" className="text-[#FFF] text-base  font-bold leading-normal absolute right-2.5 top-2.5  hover:opacity-50 rounded-lg py-2 px-5  gap-2.5 " style={{ background: 'linear-gradient(180deg, #FF617D 0%, rgba(255, 97, 125, 0.70) 100%)' }}>Search</button>
          </div>
        </form>
        
        <div className="mt-[30px] w-full h-[90px] flex-shrink-0">
          <div className="inline-flex justify-center items-center gap-[19px]">
          
            <div className="flex justify-center p-[22px] items-center gap-2.5 rounded-xl" style={{ background: 'rgba(255, 97, 125, 0.07)' }}>
              <img src={img1} className="w-6 h-6" />
            </div>
            
            <div className="flex justify-center p-[22px] items-center gap-2.5 rounded-xl" style={{ background: 'rgba(255, 97, 125, 0.07)' }}>
              <img src={img2} className="w-6 h-6" />
            </div>
            
            
            <div className="flex justify-center p-[22px] items-center gap-2.5 rounded-xl" style={{ background: 'rgba(255, 97, 125, 0.07)' }}>
              <img src={img3} className="w-6 h-6" />
            </div>
            
            <div className="flex justify-center p-[22px] items-center gap-2.5 rounded-xl" style={{ background: 'rgba(255, 97, 125, 0.07)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_20_83)">
                <path d="M1.00008 9.99883C0.734845 9.99883 0.48047 9.89347 0.292918 9.70592C0.105366 9.51836 0 9.26399 0 8.99875V1.00008C0 0.734845 0.105366 0.48047 0.292918 0.292918C0.48047 0.105366 0.734845 0 1.00008 0H9.00075C9.26599 0 9.52036 0.105366 9.70792 0.292918C9.89547 0.48047 10.0008 0.734845 10.0008 1.00008V8.99875C10.0008 9.26399 9.89547 9.51836 9.70792 9.70592C9.52036 9.89347 9.26599 9.99883 9.00075 9.99883H1.00008ZM15.0013 9.99883C14.736 9.99883 14.4816 9.89347 14.2941 9.70592C14.1065 9.51836 14.0012 9.26399 14.0012 8.99875V1.00008C14.0012 0.734845 14.1065 0.48047 14.2941 0.292918C14.4816 0.105366 14.736 0 15.0013 0H22.9999C23.2652 0 23.5195 0.105366 23.7071 0.292918C23.8946 0.48047 24 0.734845 24 1.00008V8.99875C24 9.26399 23.8946 9.51836 23.7071 9.70592C23.5195 9.89347 23.2652 9.99883 22.9999 9.99883H15.0013ZM1.00008 24C0.734845 24 0.48047 23.8946 0.292918 23.7071C0.105366 23.5195 0 23.2652 0 22.9999V14.9992C0 14.734 0.105366 14.4796 0.292918 14.2921C0.48047 14.1045 0.734845 13.9992 1.00008 13.9992H9.00075C9.26599 13.9992 9.52036 14.1045 9.70792 14.2921C9.89547 14.4796 10.0008 14.734 10.0008 14.9992V22.9999C10.0008 23.2652 9.89547 23.5195 9.70792 23.7071C9.52036 23.8946 9.26599 24 9.00075 24H1.00008ZM15.0013 24C14.736 24 14.4816 23.8946 14.2941 23.7071C14.1065 23.5195 14.0012 23.2652 14.0012 22.9999V14.9992C14.0012 14.734 14.1065 14.4796 14.2941 14.2921C14.4816 14.1045 14.736 13.9992 15.0013 13.9992H22.9999C23.2652 13.9992 23.5195 14.1045 23.7071 14.2921C23.8946 14.4796 24 14.734 24 14.9992V22.9999C24 23.2652 23.8946 23.5195 23.7071 23.7071C23.5195 23.8946 23.2652 24 22.9999 24H15.0013Z" fill="#FF617D"/>
                </g>
                <defs>
                  <clipPath id="clip0_20_83">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
              </svg>
            </div>
            
            
          </div>
          <div className="flex mt-2 gap-2.5">
            <p className="text-[#9D9D9D] text-xs mx-4">health</p>
            <p className="text-[#9D9D9D] text-xs mx-5">Education</p>
            <p className="text-[#9D9D9D] text-xs mx-2">Animals</p>
            <p className="text-[#9D9D9D] text-xs mx-6">view all</p>
          </div>
        </div>
        
        
        
        <Card img={ob1} text="Donate for kids to their well being" />
        <Card img={ob2} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
        
      
        <Header />
        
      </div>
      
    </>
  )
}

export default App
