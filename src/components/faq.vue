<script>
// No need for defineProps if using Options API
// import { defineProps } from 'vue'

export default {
  data() {
    return {
      // Correctly define title as a data property
      title: 'FAQ', // Assuming you want a title for the section
      general: [
        {
          question: 'What is the minimum age to participate in Skatathon 2025?',
          answer:
            'All age groups are welcome. However, with the safety of our younger participants in mind, we urge parents to assess the suitability of the event for their children based on their skating abilities and endurance levels. For skaters under the age of 18, please display a copy of our indemnity form with parental consent at the point of registration. You may print the PDF version found in registration form, or our confirmation email.',
        },
        {
          question: 'How do I know if my entry has been accepted?',
          answer: 'You will receive an email confirmation slip upon your successful registration.',
        },
        {
          question: 'Do I get a refund if I choose not to participate after registration?',
          answer: 'Tickets are non-refundable and cannot be exchanged or transferred.',
        },
        {
          question: 'Can I transfer my race registration if I wish to withdraw from the race?',
          answer: 'All race registrations are strictly non-transferable.',
        },
        {
          question: 'Can I upgrade / downgrade my race category?',
          answer: 'Unfortunately, changes to race categories are not allowed once registration is confirmed. Please double-check your category before finalizing your registration.',
        },
        {
          question: 'I do not have a helmet. Can I still join Skatathon?',
          answer:
            'Helmets are compulsory to participate in Skatathon. Skaters must show their helmets at registration, or they would be turned away.',
        },
        {
          question: 'What happens if it rains?',
          answer:
            'Seek immediate shelter! We will wait out and give some time for the floor to dry up. If the rain persists till 10:30am, the race will unfortunately be cancelled without refunds. Please refer to the e-guide for more information regarding wet weather plans.',
        },
        {
          question: 'What if I am injured, or am not able to complete my Skatathon route?',
          answer:
            'Please approach the nearest first aid points or bicycle sweepers along the route. If not, call the safety number behind the race bib. We will also broadcast the safety number on our Facebook and Instagram nearer to the race day.',
        },
        {
          question: 'When is the last date to register?',
          answer:
            'The last date to register is on the 31 July 2025.',
        },
        {
          question: 'I missed the registration deadline. Can I still join the race?',
          answer:
            'Unfortunately, once the registration has closed, we are unable to accept any late entries for this year’s race. We hope to see you for our future events!',
        },
        {
          question: 'Can I change my shirt size?',
          answer:
            'Shirt sizes are final once submitted during registration. Please ensure you select the correct size before confirming your entry. ',
        },
        {
          question: 'My question is not in the FAQ?',
          answer:
            'Feel free to reach out to skating@sa.smu.edu.sg if you have other enquiries.',
        },
      ],
      race: [
        {
          question: 'When is Skatathon 2025?',
          answer:
            'Skatathon 2025 will be held on Sunday, 31 August 2025 from 0645 - 1330.',
        },
        {
          question: 'Where will the race be held?',
          answer: 'The race will be held at Passion Wave @ Marina Bay.',
        },
        {
          question: "How do I know which wave I'm assigned to?",
          answer:
            'Each participant would be assigned a race bib number after registering on race day. Participants will be assigned to the waves according to their race bib numbers.',
        },
        {
          question: 'Is there a cut off timing for the race?',
          answer: 'Participants who do not return by 12:30pm would not have their timings recorded.',
        },
        {
          question: 'Where is the starting and ending point?',
          answer: 'Starting Point: Area Beneath the Bay East Bridge, Ending Point: PassionWave @ Marina Bay.',
        },
        {
          question: 'How do I get to the venue?',
          answer: 'The nearest MRT station is Tanjiong Rhu. For more details head over to our instagram page for details on how to get to Passion Wave @ Marina Bay.',
        },
        {
          question: 'Are there any prizes?',
          answer:
            'As Skatathon is an inclusive event for skaters of different age groups and skating proficiencies, it is not a competitive event and there are no prizes for individual categories. However, we have a complimentary race pack for all participants and attractive prizes to win in our giveaways!',
        },
      ],
    }
  },
}

</script>

<template>
  <div class="hero bg-base-200 min-h-[50vh]">
    <div class="hero-content text-center">
      <div class="max-w-8xl w-full">
        <h1 class="text-4xl md:text-5xl font-bold font-varsity mt-10 mb-10">{{ title }}</h1>
        <div class="tabs tabs-box flex justify-center">
          <input type="radio" name="my_tabs_1" class="tab text-lg" aria-label="Registration" checked="checked"/>
          <div class="tab-content pt-10">
            <div
              v-for="(item, index) in general"
              :key="index"
              class="collapse collapse-plus bg-base-100 border border-base-300 mb-2"
            >
              <input type="checkbox" name="my-accordion-1" />

              <div class="collapse-title font-semibold text-lg text-left">{{ item.question }}</div>
              <div class="collapse-content text-sm">
                <p class="text-lg text-left">{{ item.answer }}</p>
              </div>
            </div>
          </div>

          <input type="radio" name="my_tabs_1" class="tab text-lg" aria-label="Race" />
          <div class="tab-content pt-10">
            <div
              v-for="(item, index) in race"
              :key="index"
              class="collapse collapse-plus bg-base-100 border border-base-300 mb-2"
            >
              <input type="checkbox" name="my-accordion-2" />

              <div class="collapse-title font-semibold text-lg text-left">{{ item.question }}</div>
              <div class="collapse-content text-sm">
                <p class="text-lg text-left">{{ item.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
