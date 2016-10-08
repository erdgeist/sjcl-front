function inject_css() {
  var s = document.createElement('style');
  s.setAttribute('type', 'text/css');
  s.appendChild(document.createTextNode("\
@font-face { \n\
font-family: 'fontello'; src: url('data:application/octet-stream;base64,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') format('woff'); } \n\
.sjcl-undecrypted { background-color: rgba(255, 0, 0, 0.2); cursor: pointer; } \n\
.sjcl-decrypted { background-color: rgba(0, 255, 0, 0.2); } \n\
.sjcl-hook { display: inline-block; position: relative; vertical-align: top; } \n\
.sjcl-hook:before, .sjcl-decrypted:before, .sjcl-undecrypted:before { content: '\\e801 '; font-family: 'fontello'; opacity: 0.5; font-size: 1.1em; padding: 0 0.3em 0 0.3em; margin-right: 0.2em; box-shadow: 0 0 0.3em currentColor; border-radius: 50%; } \n\
.sjcl-dropdown, .sjcl-addkey-sub { display: none; border-radius: 0.4em; } \n\
.sjcl-hook:hover .sjcl-dropdown { display: block; position: absolute; min-width: 300px; background-color: #f9f9f9; box-shadow: 0px 1em 2em 0 rgba(0,0,0,0.2); color: black; } \n\
.sjcl-decrypt, .sjcl-usekey, .sjcl-addkey { padding: 2px 3px 2px 6px; cursor: pointer; border-radius: 0 0 0.4em 0.4em; } \n\
.sjcl-decrypt:hover, .sjcl-usekey:hover, .sjcl-addkey:hover { border-radius: 0.4em; background-color: #f1f1f1; } \n\
.sjcl-addkey:hover .sjcl-addkey-sub { display: block; } \n\
.sjcl-addkey-sub label { display: inline-block !important; width: 40%; } \n\
.sjcl-addkey-button, .sjcl-delkey-button { display: inline-block; text-align: center; margin-right: 6px; width: 40%; border-radius: 0.4em; border: solid 0.1em lime; } \n\
.sjcl-delkey-button { border: solid 0.1em red; } \n\
.sjcl-addkey-button:hover { background-color: lime; } \n\
.sjcl-delkey-button:hover { background-color: red; } \
"));
  document.getElementsByTagName('head')[0].appendChild(s);
}

function inject_textarea_hook() {
  // Get rid of old hooks
  var hooks = document.getElementsByClassName("sjcl-hook");
  for(var i = hooks.length - 1; i >= 0; i--) {
    var n = hooks.item(i);
    n.parentNode.removeChild(n);
  }
  // And insert new hooks
  var walk=document.createTreeWalker(document.body,NodeFilter.SHOW_ELEMENT,null,false);
  while(n = walk.nextNode())
    if (n.type == 'textarea') {
      var keys = list_keys();
      var h = document.createElement('div');
      h.className='sjcl-hook';
      var dd = '<div class="sjcl-dropdown">'
      for (var i in keys)
        dd += '<div class="sjcl-usekey" keyname="'+keys[i]+'">Encrypt with: "'+keys[i]+'"</div>';
      h.innerHTML = dd + '<div class="sjcl-decrypt">Decrypt</div><hr/><div class="sjcl-addkey">Manage keys<div class="sjcl-addkey-sub"><label>Name:</label><input class="sjcl-addkey-name" type="text"/><label>Key:</label><input class="sjcl-addkey-key" type="password"/><div class="sjcl-addkey-button">add!</div><div class="sjcl-delkey-button">delete!</div></div></div></div>';
      n.parentNode.insertBefore(h,n.nextSibling);
    }
}

function decrypt_string(text, target_node, do_prompt) {
  var rp, ct, plain, key_name, key, do_store = false;

  /* Clear sjcl classes from target node */
  target_node.className = target_node.className.replace(/(^| )sjcl-[a-z]+($| )/, '');

  /* Check sjcl signature and bail out */
  if (text.substring(0,7) != 'sjcl://') 
    throw 'Text is not encrypted.';

  /* Skip signature */
  text = text.substring(7);
  /* Retrieve key name */
  try {
    ct = JSON.parse(text);
  } catch (e) {
    target_node.className += ' sjcl-garbled';
    throw 'Cipher text is garbled.';
  }
  try {
    key_name = sjcl.codec.utf8String.fromBits(sjcl.codec.base64.toBits(ct.adata));
  } catch(e) {
    target_node.className += ' sjcl-garbled';
    throw 'Can not extract key name';
  }

  key = retrieve_key(key_name);
  if (!key && do_prompt) {
    key = prompt( 'Enter password for the key ' + key_name);
    do_store = true;
  }
  if (!key) {
    target_node.className +=  ' sjcl-undecrypted';
    throw 'You need the key "' + key_name + '" to decrypt.';
  }
  try {
    plain = sjcl.decrypt(key, text, {}, rp);
  } catch (e) {
    if (do_store)
      alert('Could not decrypt');
    target_node.className += ' sjcl-undecrytable';
    throw 'Your key "' + key_name + '" can not decrypt.';
  }
  if (do_store)
    store_key(key_name, key);

  target_node.className += ' sjcl-decrypted';
  return plain.replace(/\s+$/gm,'');
}

function decrypt_element(n) {
  try {
    n.data = decrypt_string(n.data, n.parentElement, false);
  } catch(e) {
    n.parentElement.ciphertext = n.data;
    n.parentElement.ciphertext_node = n;
    n.data = e;
  }
}

function decrypt_undecrypted(n) {
  if(!n.ciphertext || n.ciphertext_node==null)
    return;
  try {
    n.ciphertext_node.data = decrypt_string(n.ciphertext, n, true);
    inject_textarea_hook();
    find_undecrypted_nodes();
  } catch(e) {
    n.ciphertext_node.data = e;
  }
}

function decrypt_textarea(n) {
  try {
    n.value = decrypt_string(n.value, n, false);
  } catch(e) {
    alert(e);
  }
}

function encrypt_textarea(n,name,key) {
  var t = n.value + (" ".repeat(17 + Math.floor((Math.random() * 64))));
  var p = {adata:name, iter:1000, mode:'ccm', ts:128, ks:256, iter: 1000 };
  n.value = 'sjcl://'+sjcl.encrypt(key, t || '', p);
  n.className = n.className.replace(/(^| )sjcl-[a-z]+($| )/, '')+' sjcl-undecrypted';
}

/* Auto node operation */
function find_encrypted_nodes() {
  var n, walk = document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null,false);
  while(n = walk.nextNode())
    if (n.data.substring(0,7) == 'sjcl://')
      decrypt_element(n, false);
}

function find_undecrypted_nodes() {
  var undec = document.getElementsByClassName("sjcl-undecrypted");
  for(var i = 0; i < undec.length; i++)
    decrypt_undecrypted(undec.item(i), false);
}

/* Passphrase accessors */
function manage_key(n, do_add) {
  var name = n.parentNode.getElementsByClassName('sjcl-addkey-name')[0];
  var key = n.parentNode.getElementsByClassName('sjcl-addkey-key')[0];
  if (!name.value)
    alert( 'Missing key name.');
  else
    store_key(name.value, do_add ? key.value : '');
  inject_textarea_hook();
}

/* Try to use the most logliving method to store key array */
function store_key(name, key) {
  /* Collect keys from all storage methods */
  var obj = {};
  try {
    obj = JSON.parse(localStorage['frab-sjcl']);
  } catch(e) {}
  try {
    var sso = JSON.parse(sessionStorage['frab-sjcl']);
    for (var k in sso) { obj[k] = sso[k]; }
    delete sessionStorage['frab-sjcl'];
  } catch(e) {}
  try {
    wo = JSON.parse(window['frab-sjcl']);
    for (var k in wo) { obj[k] = wo[k]; }
    delete window['frab-sjcl'];
  } catch(e) {}

  if (key)
    obj[name] = key;
  else
    delete obj[name];
  var out = JSON.stringify(obj);

  /* Try to store in local/sessionStorage and fall back to
     the window object, so at least we can decrypt all elements
     locally */
  try {
    localStorage['frab-sjcl'] = out;
    if (localStorage['frab-sjcl'] != out)
      throw 0;
    return;
  } catch(e) {}
  try {
    sessionStorage['frab-sjcl'] = out;
    if (sessionStorage['frab-sjcl'] != out)
      throw 0;
    return;
  } catch(e) {}

  window['frab-sjcl'] = out;
}

function retrieve_key(name) {
  try {
    var obj = JSON.parse(localStorage['frab-sjcl'] || '{}');
    if (obj && obj[name])
      return obj[name];
  } catch(e) {}
  try {
    var obj = JSON.parse(sessionStorage['frab-sjcl'] || '{}');
    if (obj && obj[name])
      return obj[name];
  } catch(e) {}
  try {
    var obj = JSON.parse(window['frab-sjcl'] || '{}');
    if (obj && obj[name])
      return obj[name];
  } catch(e) {}
  return '';
}

function list_keys() {
  var key_list = [];
  try {
    key_list = (Object.keys(JSON.parse(localStorage['frab-sjcl'])));
  } catch(e) {}
  try {
    key_list = key_list.concat(Object.keys(JSON.parse(sessionStorage['frab-sjcl'])));
  } catch(e) {}
  try {
    key_list = key_list.concat(Object.keys(JSON.parse(window['frab-sjcl'])));
  } catch(e) {}
  return key_list;
}

/* Event handler plumbing */
function click_body(e) {
  var n = e.target;

  if (n.className=='sjcl-usekey') {
    var name = n.getAttribute('keyname');
    encrypt_textarea(n.parentNode.parentNode.previousSibling, name, retrieve_key(name));
  }
  if (n.className=='sjcl-decrypt')
    decrypt_textarea(n.parentNode.parentNode.previousSibling);
  if ((' '+n.className+' ').indexOf(' sjcl-undecrypted ') > -1)
    decrypt_undecrypted(n);
  if (n.className=='sjcl-addkey-button')
    manage_key(n,true);
  if (n.className=='sjcl-delkey-button')
    manage_key(n,false);
}

function loaded() {
  sjcl.random.startCollectors();
  document.body.addEventListener("click", click_body)

  inject_css();
  inject_textarea_hook();

  /* Try to decrypt all encrypted nodes */
  find_encrypted_nodes();
}

window.addEventListener('load', loaded);
