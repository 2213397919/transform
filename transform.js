(function(w){
	
	w.transformCss = function (node,name,value){
			//创建一个对象，用来保存我们刚刚写的名值对（键值对）
			//var obj = {};
			//检测一下node上到底有没有obj，如果没有，证明我们没有创建过该对象，需要我们重新创建一个
			if(!node.obj){
				node.obj = {}; //只执行一次
			};
			
			//根据实参arguments的个数，确定读和写
			//写
			if(arguments.length > 2){
				//把 名值对 塞到对象中
				node.obj[name] = value;
				//node.obj = {translateX: 200, scale: 0.5}
				
				//保存一下css样式的结果
				var result = '';
				
				//拿去对象中每一个属性名（枚举）
				for (var i in node.obj) {
					//根据属性名，确定执行语句
					switch (i){
						case 'translateX':
						case 'translateY':
						case 'translateZ':
						case 'translate':
										//translateX(200px)
							result += i+'('+ node.obj[i] +'px) ';
							break;
						case 'scaleX':
						case 'scaleY':
						case 'scale':
							result += i+'('+ node.obj[i] +') ';
							break;
						case 'rotate':
						case 'rotateX':
						case 'rotateY':
						case 'rotateZ':
						case 'skewX':
						case 'skewY':
						case 'skew':
							result += i+'('+ node.obj[i] +'deg) ';
							break;	
					}
					
				};
				
				//把最终元素样式加上去
				node.style.transform = result;
				
			}else{
			//读	
				if(node.obj[name] == undefined){
					//1.直接读取
					if(name == 'scale' || name == 'scaleX' || name == 'scaleY'){
						//scale = 1
						value = 1;
					}else{
						//translate , rotate ,skew = 0
						value = 0;
					};
												
				}else{
					//2.先进行写入 （translateX = 200），再去读取 ，结果200拿到
					value = node.obj[name];
				}
			
				//返回值
				return value;
			}

			
			
		};
	
})(window);

