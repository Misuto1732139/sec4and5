const EPS=0.00000001;

function main(){
var x =0.0, y=0.0;
var h=0.01, dx=1.0, xmax=10.0;
var ddx=0.0,k1,k2,k3,k4;

var res = document.querySelector( "#result" );
  addToTable( res, "X", "Y", "th" );

do {
    if( x>= ddx - EPS ) {
      ddx += dx;
      addToTable( res, x, y, "td" );
    }

	k1=func_f(x      ,y         );
	k2=func_f(x+h/2.0,y+h*k1/2.0);
	k3=func_f(x+h/2.0,y+h*k2/2.0);
	k4=func_f(x+h    ,y+k3*h    );

    y += (h/6.0)*(k1+2.0*k2+2.0*k3+k4);
    x += h;
  } while( x <= xmax );
  }

function func_f(x, y){
return 2.0 * x;
}

/**
 * �e�[�u���v�f�ɉ񓚂�ǉ�����֐�
 * @param {HTMLTableElement} elem �ǉ�����Table�v�f
 * @param {number} x x�̒l
 * @param {number} y y�̒l
 * @param {string} classification "th"��"td"���w�肷��
 */
function addToTable( elem, x, y, classification ) {
  var table_row = document.createElement( 'tr' );
  var tdx = document.createElement( classification );
  var tdy = document.createElement( classification );
  tdx.appendChild( document.createTextNode( x ) );
  tdy.appendChild( document.createTextNode( y ) );
  table_row.appendChild( tdx );
  table_row.appendChild( tdy );
  elem.appendChild( table_row );
}
