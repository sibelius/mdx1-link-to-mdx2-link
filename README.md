# RegExp to transform mdx 1 link to mdx 2 links

transform this

```mdxjs
<https://example.com>
```

to

```mdxjs
[https://example.com](https://example.com)
```

## How to run?

```bash
find docs -iname '*.md' -print | xargs yarn transform
```