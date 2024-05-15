
export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'darkred');
    static readonly JAVA = new Tag('Java', 'darkred');
    static readonly SPRINGBOOT = new Tag('Spring Boot', 'darkred');
    static readonly SPRINGSECURITY = new Tag('Spring Security', 'darkred');
    static readonly SPRINGJWT = new Tag('Spring JWT', 'darkred');
    static readonly SPRINGWEB = new Tag('Spring Web', 'darkred');
    static readonly LOMBOK = new Tag('Lombok', 'darkred');
    static readonly JPA = new Tag('JPA', 'darkred');
    static readonly JDBC = new Tag('JDBC', 'darkred');
    static readonly POSTGRESQL = new Tag('PostgreSQL', 'darkblue')
    static readonly SQL = new Tag('SQL', 'darkblue');
    static readonly PYTHON = new Tag('Python', 'darkgreen');
    static readonly FLASK = new Tag('Python', 'darkgreen');
    static readonly BEAUTIFULSOUP = new Tag('Beautiful Soup', 'darkgreen');
    static readonly PLAYWWRIGHT = new Tag('Playwright', 'darkgreen');
    static readonly SELENIUM = new Tag('Selenium Driver', 'darkgreen');
    static readonly PANDAS = new Tag('Pandas', 'darkgreen');
    static readonly DASH = new Tag('Dash', 'darkgreen');
    static readonly PLOTLY = new Tag('Plotly', 'darkgreen');
    static readonly RESTAPI = new Tag('Rest API', 'black');
    static readonly INSOMNIA = new Tag('Insomnia', 'black');
    static readonly POSTMAN = new Tag('Postman', 'black');
    static readonly TYPESCRIPT = new Tag('Typescript', 'yellow');
    static readonly JAVASCRIPT = new Tag('Javascript', 'yellow');
    static readonly HTML5 = new Tag('HTML5', 'yellow');
    static readonly CSS3 = new Tag('CSS3', 'yellow');
    static readonly BOOTSTRAP = new Tag('Bootstrap', 'yellow');


    private constructor(private readonly key: string, public readonly color: string) {
    }

    toString() {
        return this.key;
    }

}