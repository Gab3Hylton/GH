(()=>{
 const url=window.GH_BOOKING_URL||'';
 if(!/^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(url))return;
 const mount=document.querySelector('#group-booking-mount');
 if(!mount)return;
 const frame=document.createElement('iframe');frame.src=url;frame.title='Reserve a GH Training Saturday group session';frame.className='group-booking-frame';frame.referrerPolicy='strict-origin-when-cross-origin';
 const direct=document.createElement('a');direct.href=url;direct.target='_blank';direct.rel='noopener noreferrer';direct.className='booking-direct';direct.textContent='Open booking form in a new tab ↗';
 mount.replaceChildren(frame,direct);
})();
