/**
 * author: Raj Mohan
 */
// const { eventSectionData } = require('../constants');
// import { eventSectionData } from '../constants';
const eventSectionData = [
  {
      eventName: 'Flyers',
      subName: 'Quads',
      imageName: '',
      links: {
          facebookLink: 'www.facebook.com',
          twitterLink: 'www.facebook.com',
          instagramLink: 'www.facebook.com',
          linkedInLink: 'www.facebook.com',
      },
  },
  {
      eventName: 'Sarah Jhonson',
      subName: 'CTO',
      imageName: '',
      links: {
          facebookLink: 'www.facebook.com',
          twitterLink: 'www.facebook.com',
          instagramLink: 'www.facebook.com',
          linkedInLink: 'www.facebook.com',
      },
  },
  {
      eventName: 'Sarah2 Jhonson',
      subName: 'CTO',
      imageName: '',
      links: {
          facebookLink: 'www.facebook.com',
          twitterLink: 'www.facebook.com',
          instagramLink: 'www.facebook.com',
          linkedInLink: 'www.facebook.com',
      },
  },
  {
      eventName: 'Sarah Jhonson',
      subName: 'CTO',
      imageName: '',
      links: {
          facebookLink: 'www.facebook.com',
          twitterLink: 'www.facebook.com',
          instagramLink: 'www.facebook.com',
          linkedInLink: 'www.facebook.com',
      },
  }
];

const countDetails = {
    'Clients': '524',
    'Projects': '132',
    'Students benefited': '6500',
    'R & D': '87',
}


const eventSection = document.getElementById('events-section');

 (function() {
     populateEvents();
 })();

 function populateEvents() {
     if (!eventSectionData || eventSectionData.length === 0) { return; }
     let eventSectionHTML = '';
     for (const eventData of eventSectionData) {
        const singleEventHTML = `
            <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
             <div class="member">
             <img src="assets/img/events/${eventData.imageName || 'defaultEventImage.jpg'}" class="img-fluid" alt="">
             <div class="member-info">
                <div class="member-info-content">
                <h4>${eventData.eventName}</h4>
                <span>${eventData.subName}</span>
                ${eventData.links ? `<div class="social">
                    ${eventData.links.twitterLink ? `<a href=""><i class="bi bi-twitter"></i></a>` : ''}
                    ${eventData.links.facebookLink ? `<a href=""><i class="bi bi-facebook"></i></a>` : ''}
                    ${eventData.links.instagramLink ? `<a href=""><i class="bi bi-instagram"></i></a>` : ''}
                    ${eventData.links.linkedInLink ? `<a href=""><i class="bi bi-linkedin"></i></a>` : ''}
                </div>` : ''}
                </div>
            </div>
            </div>
        </div>`;
        eventSectionHTML += singleEventHTML;
     }
     eventSection.innerHTML = 
     `<div id="events-section"></div>
     <section id="team" class="team section-bg">
       <div class="container" data-aos="fade-up">
         <div class="section-header">
           <h3>Events</h3>
           <p>Checkout our current and upcoming event updates</p>
         </div>
 
         <div class="row">
            ${eventSectionHTML}
         </div>
 
       </div>
     </section>`

 }