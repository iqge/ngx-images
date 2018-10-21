# ngx-images

*Ever experienced broken image like*

![Image example](https://static.havemybooks.com/external/broken-image.png)

If ever this happen that you loose your image but there will always be a backup for you. We've added an extra feature which will boost your page load time to upto 10X. As we load the image after the page load successfully so you angular app will turn much faster using this plugin.

## Getting Started

    npm install ngx-images --save

        Then in your code `app.module.ts`
        
        import { NgxImagesModule } from  'ngx-images';

	    @NgModule({    
		    imports: [
		    ...otherImports,    
		    NgxImagesModule 
		    ]
	    })

Then in your code `app.component.ts`

    import { NgxImagesService, ImageConfig } from 'ngx-images';
    localConfig:  ImageConfig  = { imageFallbackPath:  'https://www.gstatic.com/webp/gallery3/1.png',
		addLoader:  true,
		loader:  'rotating-plane',
		pageLoadBoost:  true
	};

    constructor(public  imgHelper:  NgxImagesService) {}    

    ngOnInit() {
		    this.imgHelper.setGlobal({ imageFallbackPath:  'https://www.gstatic.com/webp/gallery3/2.png',    
		    addLoader:  true,    
		    loader:  'rotating-plane',    
		    pageLoadBoost:  true    
	    });    
    }
Then in your code `app.component.scss`

    @import  '~ngx-images/loader';

Then in your code `app.component.html`

    <strong>This doesn't look good</strong>
    <img src="i_am_not_here.jpg">

    <strong>Replace below image with your logo</strong>
    <span> <-Atleast one parent of image with single child is important
        <img src='asfd.jpg' ngxImages>
    </span>
### Working Examples

Here's the demo on [stackblitz](https://stackblitz.com/edit/ngx-images)


## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository]To install a particular version do it like this `npm i ngx-images@0.0.1 --save`

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

## Acknowledgments

Thanks to everyone who'll use this plugin as this is my first plugin so actively looking forward to work on it. So all the issues are welcomed and I'll look forward to actively work on them.