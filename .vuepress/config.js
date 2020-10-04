// .vuepress/config.js
module.exports = {
  title: 'ExpressDB',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides',
		ariaLabel: 'Guides Menu',
		items: [
		{ text: 'What is SQL Server Express?', link: '/what-is-sql-server-express.html'},
		{ text: 'Express vs. Standard vs. Enterprise', link: '/sql-server-express-feature-comparison.html'},
		{ text: 'SQL Express vs. LocalDB', link: '/sql-server-express-vs-localdb.html'},
		{ text: 'Which Express Version to Use', link: '/which-sql-server-express-version-to-use.html'},
		{ text: 'Which Management Studio to Use', link: '/which-sql-server-management-studio-version.html'},
		] 
	  },
      { text: 'Limitations',
		ariaLabel: 'Limitations Menu',
		items: [
		{ text: 'Size Restrictions', link: '/sql-server-express-database-size-limit.html'},
		{ text: 'Hardware Restrictions', link: '/sql-server-express-hardware-limitations.html'},
		{ text: 'Missing Database Mail', link: '/sql-server-express-sp-send-dbmail.html'}
		]
	  },
	  { text: 'Best Practices',
		ariaLabel: 'Best Practices Menu',
		items: [
		{ text: 'Backups', link: '/sql-server-express-backups.html'},
		{ text: 'Maintenance', link: '/sql-server-express-maintenance.html'},
		{ text: 'Security', link: '/sql-server-express-security-best-practices.html'}
		]
	  },
	  { text: 'Automation',
		ariaLabel: 'Automation Menu',
		items: [
		{ text: 'Replacing SQL Agent', link: '/sql-server-express-replace-sql-agent.html'},
		{ text: 'Unattended Installation', link: '/sql-server-express-unattended-install.html'}
		]
	  },
	  { text: 'Tools & Resources',
		ariaLabel: 'Free Tools Menu',
		items: [
		{ text: 'Scripts, Apps, and Resources', link: '/sql-server-resources.html'},
		{ text: 'ExpressSQL Scripts', link: 'https://expresssql.lowlydba.com/'},
		{ text: 'Azure Data Studio', link: '/azure-data-studio.html'}
		]
	  },
	  { text: 'Author',
		ariaLabel: 'Author Menu',
		items: [
		{ text: 'About', link: '/about.html'},
		{ text: 'Contact', link: '/contact.html'}
		]
	  }
    ],
    lastUpdated: 'Last Updated',
	sidebar: 'auto',
    
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'LowlyDBA/expressdb.io',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',

    // Optional options for generating "Edit this page" link
    // if your docs are in a different repo from your main project:
    docsRepo: 'LowlyDBA/expressdb.io',
    // if your docs are not at the root of the repo:
    docsDir: '/',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: false,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Edit this page on Github'
  },
  markdown: {
		lineNumbers: true
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-116662570-1'
      }
    ]
  ],
  head: [
	['link', { rel: 'icon', href: '/favicon.png'}]
  ]
}
