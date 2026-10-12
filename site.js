// Small behaviours shared by every page. The site works without this file;
// it only adds the build details and sends the contact form.

// Build date and size under the download buttons (version.json is rewritten
// by publish.ps1 each time a new APK is put up).
(function () {
  var slots = document.querySelectorAll('[data-build]');
  if (!slots.length) return;
  fetch('version.json', { cache: 'no-store' })
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (v) {
      if (!v) return;
      var when = new Date(v.built).toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' });
      var text = 'Android 6 or newer. ' + v.sizeMb + ' MB. Version ' + v.version + ', built ' + when + '.';
      slots.forEach(function (el) { el.textContent = text; });
    })
    .catch(function () {});
})();

// Contact form: saves the message to the SafeTag database.
(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;
  var note = document.getElementById('form-note');
  var button = form.querySelector('button');

  // contact.html?topic=Device preselects the subject.
  var wanted = new URLSearchParams(location.search).get('topic');
  if (wanted) {
    Array.prototype.forEach.call(form.topic.options, function (o) {
      if (o.text.toLowerCase() === wanted.toLowerCase()) form.topic.value = o.text;
    });
  }

  function say(kind, text) {
    note.className = 'form-note ' + kind;
    note.textContent = text;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = form.name.value.trim();
    var email = form.email.value.trim();
    var message = form.message.value.trim();
    if (!name) return say('err', 'Please tell us your name.');
    if (!/^\S+@\S+\.\S+$/.test(email)) return say('err', 'Please enter a valid email address so we can reply.');
    if (message.length < 5) return say('err', 'Please write a message.');
    if (form.website.value) return say('ok', 'Thank you. Your message has been sent.'); // filled by a bot

    var cfg = window.SAFETAG || {};
    button.disabled = true;
    button.textContent = 'Sending…';
    fetch(cfg.url + '/rest/v1/contact_messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: cfg.key,
        Authorization: 'Bearer ' + cfg.key,
        Prefer: 'return=minimal'
      },
      body: JSON.stringify({ name: name, email: email, topic: form.topic.value, message: message })
    })
      .then(function (r) {
        if (!r.ok) throw new Error(r.status);
        form.reset();
        say('ok', 'Thank you. Your message has been sent, and we will reply by email.');
      })
      .catch(function () {
        say('err', 'Sorry, the message could not be sent. Please check your connection and try again.');
      })
      .then(function () {
        button.disabled = false;
        button.textContent = 'Send message';
      });
  });
})();
