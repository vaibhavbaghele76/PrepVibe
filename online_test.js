function kunal_test(Baghele){
        window.location.href=myself(Baghele);
}
function myself(Baghele){
        const multiple_test_sections={
                'Quantitative Test':'quantitative_test.html',
                'Logical Reasoning Test':'logical_reasoning.html',
                'Verbal Ability Test':"verbal_reasoning.html",
                'HTML Test':'html_test.html',
                'CSS Test':"css_test.html",
                'JavaScript Test':'javascript_test.html',
                'React.js Test':'react_js_test.html',
                'SQL Test':'sql_test.html',
                'Computer Network Test':'computer_network.html',
                'Operating System Test':'operating_system_test.html',
                'OOPs [Java] Test':'oops_java_test.html',
                'OOPs [C++] Test':'oops_cpp_test.html',
                'DSA':'dsa_test.html',
                'Python Test':'python_test.html',
                'C Test':'c_test.html',
                'C++ Test':'cpp_test.html',
                'Java Test':'java_test.html'
        };
        return multiple_test_sections[Baghele]|| 'not_found.html';
}