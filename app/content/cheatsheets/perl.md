---
title: Perl
description: Complete beginner-friendly guide to Perl programming language
category: Programming Language
---

# Perl Cheatsheet

**Perl** (Practical Extraction and Reporting Language) is a general-purpose, dynamically-typed language known for **powerful text processing** and **regular expressions**. Used extensively for scripting, system administration, and rapid development. Perl's motto: "There's more than one way to do it!"

## Getting Started (🟢 Beginner)

### What is Perl?
Perl is an **interpreted, high-level language** with exceptional text manipulation capabilities. It's especially powerful for regular expressions and file processing.

### Your First Program
```perl
#!/usr/bin/perl
use strict;
use warnings;

print "Hello, World!\n";
```

Run it:
```bash
perl hello.pl
# Output: Hello, World!
```

**Important:** `use strict;` and `use warnings;` catch common mistakes - always use them!

### Running Perl
```bash
# Run a script
perl script.pl

# One-liner (execute directly)
perl -e 'print "Hello\n"'

# Process lines from file
perl -ne 'print if /pattern/' file.txt
```

## Variables & Data Types (🟢 Beginner)

### Scalars (Single Values)
```perl
# Strings
my $name = "Alice";
my $greeting = 'Hello';  # Single quotes = literal

# Numbers
my $age = 25;
my $height = 5.9;

# Undefined
my $nothing;  # Undefined value

# Accessing
print $name;      # Alice
print $age + 5;   # 30
```

**Why `my`?** Declares a variable in current scope. Good practice!

### Arrays (Lists)
```perl
# Create array
my @colors = ("red", "blue", "green");
my @numbers = (1, 2, 3, 4, 5);
my @range = (1..10);  # Range syntax

# Access elements (0-indexed)
print $colors[0];     # red
print $colors[1];     # blue
print $#colors;       # 2 (last index)

# Get all
print "@colors";      # red blue green
print join(", ", @colors);  # red, blue, green

# Modify
push @colors, "yellow";     # Add to end
pop @colors;                # Remove from end
unshift @colors, "black";   # Add to start
shift @colors;              # Remove from start
```

### Hashes (Key-Value Pairs)
```perl
# Create hash
my %person = (
    name => "Alice",
    age => 25,
    city => "NYC"
);

# Access
print $person{name};    # Alice
print $person{age};     # 25

# Add/modify
$person{country} = "USA";

# Delete
delete $person{city};

# Check if key exists
if (exists $person{name}) {
    print "Found!";
}

# Get all keys/values
my @keys = keys %person;
my @values = values %person;
```

## Control Flow (🟢 Beginner)

### If/Elsif/Else
```perl
my $score = 85;

if ($score >= 90) {
    print "A\n";
} elsif ($score >= 80) {
    print "B\n";
} else {
    print "C\n";
}

# One-liner
print "Pass\n" if $score >= 70;
print "Fail\n" unless $score >= 70;  # unless = opposite of if
```

### Comparison Operators
```perl
# Numbers
5 == 5      # equal
5 != 3      # not equal
5 > 3       # greater than
5 < 10      # less than
5 >= 5      # greater or equal
5 <= 10     # less or equal

# Strings
"hello" eq "hello"      # string equal
"hello" ne "world"      # string not equal
"apple" lt "banana"     # string less than
"zebra" gt "apple"      # string greater than

# Logical
$a && $b    # AND
$a || $b    # OR
!$a         # NOT
```

## Loops (🟢 Beginner)

### For Loop
```perl
# C-style for
for (my $i = 0; $i < 5; $i++) {
    print "$i\n";
}

# Foreach loop (preferred)
my @fruits = ("apple", "banana", "cherry");
foreach my $fruit (@fruits) {
    print "$fruit\n";
}

# Using $_ (default variable)
foreach (@fruits) {
    print "$_\n";
}

# Hash iteration
my %ages = (alice => 25, bob => 30);
foreach my $name (keys %ages) {
    print "$name: $ages{$name}\n";
}
```

### While/Until
```perl
my $count = 0;
while ($count < 5) {
    print "$count\n";
    $count++;
}

# Until (opposite of while)
until ($count == 0) {
    print "$count\n";
    $count--;
}

# Do-while
do {
    print "At least once\n";
} while (0);
```

### Loop Control
```perl
foreach my $i (1..10) {
    next if $i == 5;     # Skip this iteration
    last if $i == 8;     # Exit loop
    print "$i\n";
}
```

## Subroutines/Functions (🟢 Beginner)

### Defining Subroutines
```perl
# Simple function
sub greet {
    print "Hello!\n";
}

# Function with parameters
sub add {
    my ($a, $b) = @_;  # @_ contains all arguments
    return $a + $b;
}

# Call
greet();              # Hello!
my $result = add(5, 3);  # 8

# With default parameters
sub introduce {
    my ($name, $age) = @_;
    $age = 18 unless defined $age;  # Default to 18
    print "$name is $age years old\n";
}
```

### Return Values
```perl
sub divide {
    my ($a, $b) = @_;
    return undef if $b == 0;  # Return nothing
    return $a / $b;
}

my $result = divide(10, 2);
if (defined $result) {
    print "Result: $result\n";
}
```

## Regular Expressions (🟡 Intermediate)

Perl is famous for regex power!

### Basic Matching
```perl
my $text = "Hello World";

# Simple match
if ($text =~ /World/) {
    print "Found World!\n";
}

# Not matching
if ($text !~ /xyz/) {
    print "Not found\n";
}

# Case-insensitive
if ($text =~ /world/i) {
    print "Found (case-insensitive)\n";
}
```

### Capture Groups
```perl
my $email = "alice@example.com";

if ($email =~ /(\w+)@(\w+\.\w+)/) {
    my $username = $1;  # $1 = first capture
    my $domain = $2;    # $2 = second capture
    print "User: $username, Domain: $domain\n";
}
```

### Substitution
```perl
my $text = "Hello World";

# Replace first occurrence
$text =~ s/World/Perl/;     # Hello Perl

# Replace all
$text =~ s/l/L/g;          # HeLLo PeRL

# With variables
my $old = "World";
my $new = "Perl";
$text =~ s/$old/$new/;
```

### Common Patterns
```perl
# Digits
/\d+/           # One or more digits
/^\d{3}-\d{4}$/ # Phone format: XXX-XXXX

# Letters
/[a-z]+/        # Lowercase letters
/[A-Z]+/        # Uppercase letters
/[a-zA-Z0-9_]+/ # Word characters

# Whitespace
/\s+/           # One or more spaces
/\w+/           # Word characters

# Start/End
/^Hello/        # Starts with Hello
/World$/        # Ends with World

# Alternation
/(cat|dog)/     # cat or dog

# Quantifiers
/a*b/           # Zero or more 'a' then 'b'
/a+b/           # One or more 'a' then 'b'
/a?b/           # Zero or one 'a' then 'b'
/a{2,4}b/       # 2 to 4 'a's then 'b'
```

## File Operations (🟡 Intermediate)

### Reading Files
```perl
open(my $fh, '<', 'file.txt') or die "Cannot open: $!";

# Read line by line
while (my $line = <$fh>) {
    chomp($line);  # Remove newline
    print "$line\n";
}

close($fh);

# Read all at once
open(my $fh, '<', 'file.txt') or die "Cannot open: $!";
my @lines = <$fh>;
close($fh);
```

### Writing Files
```perl
open(my $fh, '>', 'output.txt') or die "Cannot open: $!";
print $fh "Hello, File!\n";
print $fh "Second line\n";
close($fh);

# Append
open(my $fh, '>>', 'output.txt') or die "Cannot open: $!";
print $fh "Appended line\n";
close($fh);
```

## Practical Examples

### Count Words in File
```perl
#!/usr/bin/perl
use strict;
use warnings;

my $filename = shift @ARGV;  # Get filename from command line
die "No filename provided\n" unless $filename;

open(my $fh, '<', $filename) or die "Cannot open $filename: $!";

my %word_count;
while (my $line = <$fh>) {
    chomp($line);
    my @words = split /\s+/, $line;
    foreach my $word (@words) {
        $word_count{$word}++;
    }
}

close($fh);

# Print sorted by count
foreach my $word (sort { $word_count{$b} <=> $word_count{$a} } keys %word_count) {
    print "$word: $word_count{$word}\n";
}
```

### Log File Parser
```perl
#!/usr/bin/perl
use strict;
use warnings;

my $logfile = "app.log";
open(my $fh, '<', $logfile) or die "Cannot open: $!";

my $error_count = 0;
while (my $line = <$fh>) {
    if ($line =~ /ERROR/) {
        $error_count++;
        print "Found error: $line";
    }
}

close($fh);
print "Total errors: $error_count\n";
```

## Summary

Perl excels at **text processing, regex, and system administration**. Its powerful one-liners and extensive CPAN library make it indispensable for DevOps and scripting. Perfect for those who need to process text and files efficiently!

Key strengths:
- **Powerful regex** - industry standard for pattern matching
- **Text processing** - extract, transform, report on data
- **System scripting** - interact with OS and files easily
- **CPAN** - massive library of reusable modules
- **One-liners** - concise, powerful command-line tools
