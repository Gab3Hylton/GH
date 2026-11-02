(()=>{
 const url=window.GH_BOOKING_URL||'';
 if(!/^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(url))return;
 const link=document.querySelector('#group-booking-link');if(link)link.href=url;
 const details=document.querySelector('#inline-booking'),mount=document.querySelector('#inline-booking-mount');if(!details||!mount)return;
 details.addEventListener('toggle',()=>{if(!details.open||mount.childElementCount)return;const frame=document.createElement('iframe');frame.src=url;frame.title='Reserve a GH Training Saturday group session';frame.className='group-booking-frame';frame.referrerPolicy='strict-origin-when-cross-origin';mount.append(frame);});
})();
