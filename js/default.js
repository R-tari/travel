//  $(function()
//      {
//         $('#btn-nav').on(
//             {
//                 'click':function()
//                 {
//                $('.header,.nav').toggleClass('show-nav');
//                 },
                    
            
//              }
//          );
//       })


    
    // let btnNav=document.getElementById('btn-nav');
    document.getElementById('btn-nav').addEventListener('click',function()
    {
        let _header=document.querySelector('.header');
        let _nav=document.querySelector('.nav');
        document.querySelector('.header').classList.toggle('show-nav');
        _nav.classList.toggle('show-nav');
    })
