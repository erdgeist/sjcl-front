# Simple AES-256-CCM-PSK drop in front end script for the sjcl library

This script is intended to be just included in any HTML document via a simple <script src="sjcl-front.js"></script>
and provide ad-hoc group crypto for that site.

The script walks through all text nodes and checks for the sjcl-front signature sjcl://
and tries to retrieve a key from localStorage or sessionStorage whose name matches the
one encoded as associated data in the encoded sjcl dictionary. If it can decrypt the
string, the text node's content is replaced by the plaintext and a class sjcl-decrypted
is added to its parent node.

If the respective key can not be found, the class sjcl-undecrypted is added to the
parent node, which also receives a copy of the ciphertext, before the text node is
replaced by an informative message. A click handler for sjcl-undecrypted objects allows
to later re-decrypt the text by providing a key.

During initialisation, the script also walks through all TEXTAREA nodes and injects a
hook revealing a contextual drop down menu that allows encrypting the TEXTAREA's content,
decrypting it and adding/deleting keys in localStorage. Future versions may allow adding
that hook to text input fields or filtering by class or id.

Finally the script injects CSS to the document's head to get the injected nodes working.

You can try the script at [https://erdgeist.org/webcrypto/].

The library that does the heavy lifting can be found here: https://github.com/bitwiseshiftleft/sjcl

