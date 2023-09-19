let numInp = document.querySelector('input');
                    let heading1 = document.querySelector('h2');
                    let heading2 = document.querySelector('h1[id=Num]');


                    function ranNumGen(){
                              heading1.textContent = "HERE IS YOUR RANDOM NUMBER!";

                              //ranNum variables
                              let ranNum10 = Math.floor( (Math.random() *10)+1 );
                              let ranNum100 = Math.floor( (Math.random() *100)+1 );
                              let ranNum1000 = Math.floor( (Math.random() *1000)+1 );
                              let ranNum10000 = Math.floor( (Math.random() *10000)+1 );
                              let ranNum100000 = Math.floor( (Math.random() *100000)+1 );
                              let ranNum1000000 = Math.floor( (Math.random() *1000000)+1 );

                              // heading2.textContent = ranNum;
                              switch(numInp.value){

                                        case "1-10":
                                        heading2.textContent = ranNum10;
                                        break;

                                        case "1-100":
                                        heading2.textContent = ranNum100;
                                        break;

                                        case "1-1,000":
                                        heading2.textContent = ranNum1000;
                                        break;

                                        case "1-10,000":
                                        heading2.textContent = ranNum10000;
                                        break;

                                        case "1-100,000":
                                        heading2.textContent = ranNum100000;
                                        break;

                                        case "1-1,000,000":
                                        heading2.textContent = ranNum1000000;
                                        break;


                                        case "1-1000":
                                        heading2.textContent = ranNum1000;
                                        break;

                                        case "1-10000":
                                        heading2.textContent = ranNum10000;
                                        break;

                                        case "1-100000":
                                        heading2.textContent = ranNum100000;
                                        break;

                                        case "1-1000000":
                                        heading2.textContent = ranNum1000000;
                                        break;

                                        default:
                                        heading2.textContent = 'OH! Please select the right "range".'
                                        break;
                              }
                              
                    }