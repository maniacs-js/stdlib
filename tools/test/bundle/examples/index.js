'use strict';

var join = require( 'path' ).join;
var bundle = require( './../lib' );

var root = join( __dirname, 'fixtures' );

var opts = {
	'pattern': '*.js'
};

bundle( root, opts, onBundle );

function onBundle( error, bundle ) {
	if ( error ) {
		throw error;
	}
	console.log( bundle.toString() );
}
