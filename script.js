//HOME PAGE WRITER SECTION JAVA SCRIPT START
document.getElementById('myImage').addEventListener('click', function() {
    var testimonials = [
        {
            heading: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae corporis repellendus!',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptates, distinctio repellendus error voluptatem ratione labore animi eum adipisci debitis voluptatum perspiciatis totam porro suscipit deleniti nisi placeat sequi aut quae ipsam exercitationem ad saepe molestiae. Magni, placeat alias? Optio perferendis quaerat maiores! Cum fugit, fugiat suscipit, tenetur quibusdam eum, omnis tempora animi laboriosam culpa modi illum voluptas. Non, voluptas.',
            Name: 'Alishba',
        },
    ];
    var headingDiv = document.getElementById('testimonialHeading');
    var textDiv = document.getElementById('testimonialText');
    var nameDiv = document.getElementById('teatimonialName');
 
    var currentText = textDiv.textContent;
    var nextIndex = (testimonials.findIndex(t => t.text === currentText) + 1) % testimonials.length;
 
    headingDiv.textContent = testimonials[nextIndex].heading;
    textDiv.textContent = testimonials[nextIndex].text;
    nameDiv.textContent = testimonials[nextIndex].Name;
});
document.getElementById('mysecondimage').addEventListener('click', function() {
    var testimonials = [
        {
            heading: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae corporis repellendus! SECOND',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptates, distinctio repellendus error voluptatem ratione labore animi eum adipisci debitis voluptatum perspiciatis totam porro suscipit deleniti nisi placeat sequi aut quae ipsam exercitationem ad saepe molestiae. Magni, placeat alias? Optio perferendis quaerat maiores! Cum fugit, fugiat suscipit, tenetur quibusdam eum, omnis tempora animi laboriosam culpa modi illum voluptas. Non, voluptas SECOND.',
            Name: 'Ayesha',

        },
    ];
    var headingDiv = document.getElementById('testimonialHeading');
    var textDiv = document.getElementById('testimonialText');
    var nameDiv = document.getElementById('teatimonialName');
 
    var currentText = textDiv.textContent;
    var nextIndex = (testimonials.findIndex(t => t.text === currentText) + 1) % testimonials.length;
 
    headingDiv.textContent = testimonials[nextIndex].heading;
    textDiv.textContent = testimonials[nextIndex].text;
    nameDiv.textContent = testimonials[nextIndex].Name;
});
document.getElementById('mythirdimage').addEventListener('click', function() {
    var testimonials = [
        {
            heading: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae corporis repellendus! THIRD',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptates, distinctio repellendus error voluptatem ratione labore animi eum adipisci debitis voluptatum perspiciatis totam porro suscipit deleniti nisi placeat sequi aut quae ipsam exercitationem ad saepe molestiae. Magni, placeat alias? Optio perferendis quaerat maiores! Cum fugit, fugiat suscipit, tenetur quibusdam eum, omnis tempora animi laboriosam culpa modi illum voluptas. Non, voluptas THIRD.',
            Name: 'Kamran',
        },
    ];
    var headingDiv = document.getElementById('testimonialHeading');
    var textDiv = document.getElementById('testimonialText');
    var nameDiv = document.getElementById('teatimonialName');
 
    var currentText = textDiv.textContent;
    var nextIndex = (testimonials.findIndex(t => t.text === currentText) + 1) % testimonials.length;
 
    headingDiv.textContent = testimonials[nextIndex].heading;
    textDiv.textContent = testimonials[nextIndex].text;
    nameDiv.textContent = testimonials[nextIndex].Name;
});
document.getElementById('myfourimage').addEventListener('click', function() {
    var testimonials = [
        {
            heading: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae corporis repellendus! FOUR',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptates, distinctio repellendus error voluptatem ratione labore animi eum adipisci debitis voluptatum perspiciatis totam porro suscipit deleniti nisi placeat sequi aut quae ipsam exercitationem ad saepe molestiae. Magni, placeat alias? Optio perferendis quaerat maiores! Cum fugit, fugiat suscipit, tenetur quibusdam eum, omnis tempora animi laboriosam culpa modi illum voluptas. Non, voluptas FOUR.',
            Name: 'Areesha',
        },
    ];
    var headingDiv = document.getElementById('testimonialHeading');
    var textDiv = document.getElementById('testimonialText');
    var nameDiv = document.getElementById('teatimonialName');
    var currentText = textDiv.textContent;
    var nextIndex = (testimonials.findIndex(t => t.text === currentText) + 1) % testimonials.length;
 
    headingDiv.textContent = testimonials[nextIndex].heading;
    textDiv.textContent = testimonials[nextIndex].text;
    nameDiv.textContent = testimonials[nextIndex].Name;

});
//HOME PAGE WRITER SECTION JAVA SCRIPT END
//HOME PAGE TESTIMONIAL SECTION JAVA SCRIPT START
document.getElementById('mytestimonialImage').addEventListener('click', function() {
    var testimonials = [
        {
            heading: 'Arman.',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsam doloremque, corrupti corporis voluptatem officia non nihil error blanditiis soluta omnis aspernatur velit.'
        },
    ];
    var headingDiv = document.getElementById('writerHeading');
    var textDiv = document.getElementById('writerText');
 
    var currentText = textDiv.textContent;
    var nextIndex = (testimonials.findIndex(t => t.text === currentText) + 1) % testimonials.length;
 
    headingDiv.textContent = testimonials[nextIndex].heading;
    textDiv.textContent = testimonials[nextIndex].text;
});
document.getElementById('mytestimonialsecondImage').addEventListener('click', function() {
    var testimonials = [
        {
            heading: 'Saleem',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsam doloremque, corrupti corporis voluptatem officia non nihil error blanditiis soluta omnis aspernatur velit.'
        },
    ];
    var headingDiv = document.getElementById('writerHeading');
    var textDiv = document.getElementById('writerText');
 
    var currentText = textDiv.textContent;
    var nextIndex = (testimonials.findIndex(t => t.text === currentText) + 1) % testimonials.length;
 
    headingDiv.textContent = testimonials[nextIndex].heading;
    textDiv.textContent = testimonials[nextIndex].text;
});
document.getElementById('mytestimonialthirdImage').addEventListener('click', function() {
    var testimonials = [
        {
            heading: 'Ayesha',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsam doloremque, corrupti corporis voluptatem officia non nihil error blanditiis soluta omnis aspernatur velit.'
        },
    ];
    var headingDiv = document.getElementById('writerHeading');
    var textDiv = document.getElementById('writerText');
 
    var currentText = textDiv.textContent;
    var nextIndex = (testimonials.findIndex(t => t.text === currentText) + 1) % testimonials.length;
 
    headingDiv.textContent = testimonials[nextIndex].heading;
    textDiv.textContent = testimonials[nextIndex].text;
});
document.getElementById('mytestimonialfourImage').addEventListener('click', function() {
    var testimonials = [
        {
            heading: 'Shabana',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsam doloremque, corrupti corporis voluptatem officia non nihil error blanditiis soluta omnis aspernatur velit.'
        },
    ];
    var headingDiv = document.getElementById('writerHeading');
    var textDiv = document.getElementById('writerText');
 
    var currentText = textDiv.textContent;
    var nextIndex = (testimonials.findIndex(t => t.text === currentText) + 1) % testimonials.length;
 
    headingDiv.textContent = testimonials[nextIndex].heading;
    textDiv.textContent = testimonials[nextIndex].text;
});
//HOME PAGE TESTIMONIAL SECTION JAVA SCRIPT END
//HOME PAGE TESTIMONIAL SECTION JAVA SCRIPT START FOR MOBILE
document.getElementById('myImage').addEventListener('click', function() {
    var testimonials = [
        {
            heading: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae corporis repellendus!',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptates, distinctio repellendus error voluptatem ratione labore animi eum adipisci debitis voluptatum perspiciatis totam porro suscipit deleniti nisi placeat sequi aut quae ipsam exercitationem ad saepe molestiae. Magni, placeat alias? Optio perferendis quaerat maiores! Cum fugit, fugiat suscipit, tenetur quibusdam eum, omnis tempora animi laboriosam culpa modi illum voluptas. Non, voluptas.',
            Name: 'Alishba',
        },
    ];
    var headingDiv = document.getElementById('testimonialHeading');
    var textDiv = document.getElementById('testimonialText');
    var nameDiv = document.getElementById('teatimonialName');
 
    var currentText = textDiv.textContent;
    var nextIndex = (testimonials.findIndex(t => t.text === currentText) + 1) % testimonials.length;
 
    headingDiv.textContent = testimonials[nextIndex].heading;
    textDiv.textContent = testimonials[nextIndex].text;
    nameDiv.textContent = testimonials[nextIndex].Name;
});
//HOME PAGE TESTIMONIAL SECTION JAVA SCRIPT START FOR MOBILE
